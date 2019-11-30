import { Injectable } from "@angular/core";
import { Listing } from './listing.model';
import { Observable, Subscriber, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SecretService } from '../../common/services/secret.service';
import { map, flatMap } from 'rxjs/operators';

@Injectable()
export class ListingService {
  constructor(
    private _http: HttpClient,
    private _secretService: SecretService
  ) {
    this.getRandomListingId()
  }

  getListing(id: string): Observable<Listing> {
    return this._http.get<Listing>(this.getListingUrl(id))
  }

  getRandomListingId(): Observable<any> {
    return this._http.get<any>(this.getRandomListingIdUrl()).pipe(
      flatMap((res: SearchListings) => {
        return of(res.Objects[Math.floor(Math.random() * res.Objects.length)].Id)
      })
    )
  }

  private getListingUrl(id: string): string {
    return `http://localhost:3000/listing/${id}/`
  }

  private getRandomListingIdUrl(): string {
    return `http://localhost:3000/random`
  }
}

interface SearchListings {
  Objects: any[]
}
