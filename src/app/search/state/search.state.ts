import { State, Action, StateContext } from '@ngxs/store'
import { SearchAction } from './search.actions'

export class SearchStateModel {
  public items: string[]
}

@State<SearchStateModel>({
  name: 'search',
  defaults: {
    items: []
  }
})
export class SearchState {
  @Action(SearchAction)
  add(ctx: StateContext<SearchStateModel>, action: SearchAction) {
    const state = ctx.getState()
    ctx.setState({ items: [ ...state.items, action.payload ] })
  }
}
