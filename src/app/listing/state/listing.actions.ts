import { Listing } from './listing.model';

export class GetListing {
  static readonly type = '[Listing] Get Listing';

  constructor(public id?: string) { }
}

export class GetListingSuccess {
  static readonly type = '[Listing] Get Listing Success';

  constructor(public listing: Listing) { }
}

export class GetListingFailure {
  static readonly type = '[Listing] Get Listing Failure';

  constructor(public error: any) { }
}

export class GetRandomListing {
  static readonly type = '[Listing] Get Random Listing';
}
