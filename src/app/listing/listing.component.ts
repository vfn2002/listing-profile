import { Component, AfterContentInit } from '@angular/core'
import { Store, Select } from '@ngxs/store'
import { Observable } from 'rxjs'
import { ListingState } from './state/listing.state'
import { Listing } from './state/listing.model'
import { GetRandomListing } from './state/listing.actions'

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements AfterContentInit {
  /**
   * @Select() is a ProertyDecorator from Ngxs that allows us to retrieve an
   * Observable of any value in our current State. This removes a bunch
   * of boilerplate code, as well as remove as much logic from the components
   * as we can.
   */
  @Select(ListingState.listing) listing$: Observable<Listing>
  @Select(ListingState.failed) failed$: Observable<boolean>

  constructor(
    private _store: Store
  ) {}

  ngAfterContentInit() {
    this._store.dispatch(new GetRandomListing())
  }
}
