import { Component, OnInit, Input } from '@angular/core'
import { Listing, Medium } from '../state/listing.model'

@Component({
  selector: 'app-first-impression',
  templateUrl: './first-impression.component.html',
  styleUrls: ['./first-impression.component.scss']
})
export class FirstImpressionComponent {
  @Input() set listing(listing: Listing) {
    this.images = this.getCarouselPhotos(listing.Media)
    this._listing = listing
  }

  images: string[]
  _listing: Listing

  private getCarouselPhotos(media: Medium[]): string[] {
    return media.map(medium => this.getLargestMediaItemPhotoUrl(medium)).slice(0, 10)
  }

  private getLargestMediaItemPhotoUrl(medium: Medium): string {
    return medium.MediaItems[medium.MediaItems.length - 1].UrlSecure
  }
}
