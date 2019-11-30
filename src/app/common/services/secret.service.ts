import { Injectable } from "@angular/core";

@Injectable()
export class SecretService {
    private _apiKey: string = 'ac1b0b1572524640a0ecc54de453ea9f'

    get API_KEY_SECRET(): string {
        return this._apiKey
    }
}