import { Component, Input } from '@angular/core'
import { Listing } from '../state/listing.model'

@Component({
  selector: 'app-key-information',
  templateUrl: './key-information.component.html'
})
export class KeyInformationComponent {
  @Input() set listing(listing: Listing) {
    this.info = this.extractKeyInformation(listing)
  }

  info: KeyInformation

  private extractKeyInformation(listing: Listing): KeyInformation {
    return {
      bouwjaar: listing.Bouwjaar,
      wonen: listing.WoonOppervlakte,
      aantalKamers: listing.AantalKamers,
      perceel: listing.PerceelOppervlakte
    }
  }
}

export interface KeyInformation {
  bouwjaar: string,
  wonen: number,
  aantalKamers: number,
  perceel: number
}
