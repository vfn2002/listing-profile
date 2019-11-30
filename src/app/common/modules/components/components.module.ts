import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ImageSwiperComponent } from './image-swiper/image-swiper.component'
import { NgxImageSwiperModule } from 'ngx-image-swiper'



@NgModule({
  declarations: [ImageSwiperComponent],
  imports: [
    CommonModule,
    NgxImageSwiperModule
  ],
  exports:[
    ImageSwiperComponent
  ]
})
export class ComponentsModule { }
