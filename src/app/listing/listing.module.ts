import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ListingComponent } from './listing.component'
import { ListingService } from './state/listing.service'
import { NgxsModule } from '@ngxs/store'
import { ListingState } from './state/listing.state'
import { Routes, RouterModule } from '@angular/router'
import { MaterialModule } from '../common/modules/material/material.module'
import { FirstImpressionComponent } from './first-impression/first-impression.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ComponentsModule } from '../common/modules/components/components.module'
import { DescriptionComponent } from './description/description.component'
import { KeyInformationComponent } from './key-information/key-information.component'


export const routes: Routes = [
  {
    path: '',
    component: ListingComponent
  }
]

@NgModule({
  declarations: [
    ListingComponent,
    FirstImpressionComponent,
    DescriptionComponent,
    KeyInformationComponent
  ],
  imports: [
    RouterModule.forChild(
      routes
    ),
    NgxsModule.forFeature([
      ListingState
    ]),
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ComponentsModule
  ],
  providers: [
    ListingService
  ]
})
export class ListingModule { }
