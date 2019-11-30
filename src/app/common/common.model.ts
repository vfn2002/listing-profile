import { map, retryWhen, flatMap, delayWhen, catchError } from 'rxjs/operators';
import { timer, Observable, of, throwError, pipe } from 'rxjs';

// RxJs pipe that works with NgXs to dispatch the correct action depending
// on the result of the source Observable. With built in retries.
export const requestDispatchOperators = <TSuccessAction, TFailureAction>(
    {
        onSuccess,
        onFailure,
        dispatch
    }:
    {
        onSuccess: new (payload: any) => TSuccessAction,
        onFailure: new (error: any) => TFailureAction,
        dispatch: (action: any) => Observable<any>,
    }
) => {
    return pipe(
        map((payload: any) => dispatch(new onSuccess(payload))),
        retryWhen((errors: any) => {
            let {retries, retryDelay} = retryConfig

            return errors.pipe(
                delayWhen(() => timer(retryDelay)),
                flatMap((error: any) => retries-- > 0 ? of(error) : throwError(error))
            )
            
        }),
        catchError((errors: any) => dispatch(new onFailure(errors)))
    )
}

export const retryConfig = {
    retries: 3,
    retryDelay: 5000
}