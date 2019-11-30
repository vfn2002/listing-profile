export class SearchAction {
  static readonly type = '[Search] Add item';
  constructor(public payload: string) { }
}
