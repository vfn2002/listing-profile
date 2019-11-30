import { Component, OnInit, Input } from '@angular/core'
import { Listing } from '../state/listing.model'

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {
  @Input() set listing(listing: Listing) {
    this.formattedDescription = this.formatDescription(listing.VolledigeOmschrijving)
  }

  isExpanded: boolean
  formattedDescription: string[]

  expand(): void {
    this.isExpanded = true
  }

  private formatDescription(description: string): string[] {
    return description.split(/\r?\n/)
  }
}
