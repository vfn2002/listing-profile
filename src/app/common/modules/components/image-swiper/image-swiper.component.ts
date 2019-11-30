import { Component, OnInit, Input } from '@angular/core'
import { NgxSwiperConfig } from 'ngx-image-swiper'

@Component({
  selector: 'app-image-swiper',
  templateUrl: './image-swiper.component.html',
  styleUrls: ['./image-swiper.component.scss']
})
export class ImageSwiperComponent {
  @Input() images: string[]
  swiperConfig: NgxSwiperConfig = {
    navigation: false,
    pagination: true,
    paginationPlacement: 'inside',
    borderRadius: 0
  }
}
