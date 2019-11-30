import { State, Action, StateContext, Selector } from '@ngxs/store'
import { GetListing, GetListingSuccess, GetListingFailure, GetRandomListing } from './listing.actions'
import { Listing } from './listing.model'
import { ListingService } from './listing.service'
import { requestDispatchOperators } from '../../common/common.model'

export interface ListingStateModel {
  listing: Listing
  fallbackId: string
  failed: boolean
}

// ids:
// 6d01f2d0-2dcd-46f1-99e7-b6719014231c
// 3cc5fa5b-9cd6-4361-bc42-a6ef7d2defd0
// a4fa031b-070c-4d75-bdc4-f1a12d168a66
// aa171e24-4e3d-4af7-bb07-34e2df6a11c3

@State<ListingStateModel>({
  name: 'listing',
  defaults: {
    listing: null,
    fallbackId: 'aa171e24-4e3d-4af7-bb07-34e2df6a11c3',
    failed: false
  }
})
export class ListingState {
  constructor(
    private _listingService: ListingService
  ) {}

  @Action(GetListing)
  getListing({dispatch, getState, patchState}: StateContext<ListingStateModel>, {id}: GetListing) {
    const state = getState()

    patchState({
      listing: null
    })

    return this._listingService.getListing(id || state.fallbackId).pipe(
      requestDispatchOperators({
        onSuccess: GetListingSuccess,
        onFailure: GetListingFailure,
        dispatch: dispatch
      })
    )
  }

  @Action(GetListingSuccess)
  getListingSuccess({patchState}: StateContext<ListingStateModel>, {listing}: GetListingSuccess) {
    patchState({
      listing: listing
    })
  }

  @Action(GetListingFailure)
  getListingFailure({patchState}: StateContext<ListingStateModel>, {}: GetListingFailure) {
    patchState({
      failed: true
    })
  }

  @Action(GetRandomListing)
  getRandomListing({dispatch}: StateContext<ListingStateModel>, {}: GetRandomListing) {
    return this._listingService.getRandomListingId().pipe(
      requestDispatchOperators({
        onSuccess: GetListing,
        onFailure: GetListingFailure,
        dispatch: dispatch
      })
    )
  }

  @Selector()
  static listing({listing}: ListingStateModel): Listing {
    return listing
  }

  @Selector()
  static failed({failed}: ListingStateModel): boolean {
    return failed
  }
}
