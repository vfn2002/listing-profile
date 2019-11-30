import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SecretService } from './common/services/secret.service'
import { Routes, RouterModule } from '@angular/router'
import { NgxsModule } from '@ngxs/store'
import { CommonModule } from '@angular/common'
import { MaterialModule } from './common/modules/material/material.module'
import { FlexLayoutModule } from '@angular/flex-layout'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./listing/listing.module').then(module => module.ListingModule)
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxsModule.forRoot(),
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    SecretService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
