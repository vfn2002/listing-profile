import { Component } from '@angular/core'
import { Store } from '@ngxs/store'
import { GetRandomListing } from './listing/state/listing.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkTheme: boolean = false

  constructor(
    private _store: Store
  ) {}

  loadNewListing(): void {
    this._store.dispatch(new GetRandomListing())
  }
}
