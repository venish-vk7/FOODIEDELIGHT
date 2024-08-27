import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  SET_DATA(key: string, data: any) {
    localStorage.setItem(
      key,
      JSON.stringify(data)
    );
  }

  GET_DATA(key: string) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }


}
