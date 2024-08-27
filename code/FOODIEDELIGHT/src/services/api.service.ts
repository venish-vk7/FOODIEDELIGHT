import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONSTANTS } from '../utils/constant';
import { StorageService } from './storage.service';
import { RestaurantAPIResponse } from '../interfaces/restaurentForm';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private BASE_URL: string | undefined = 'http://api.com';

  constructor(private http: HttpClient, private storage: StorageService) {}

  public async GET(
    key: string,
    storageKey: string,
    isLocal?: boolean
  ): Promise<RestaurantAPIResponse | any> {
    const url =
      this.BASE_URL + key === 'ALL'
        ? CONSTANTS.API_CONSTANTS.GET_ALL_RESTAURANT_INFO
        : CONSTANTS.API_CONSTANTS.GET_RESTAURANT_INFO + '/' + key;
    let response: any;
    let status: string;

    if (isLocal) {
      response = this.storage.GET_DATA(storageKey);
      status = CONSTANTS.API_STATUS_SUCCESS;
    } else {
      try {
        response = await this.http.get(url);
        status = CONSTANTS.API_STATUS_SUCCESS;
      } catch (error) {
        response = error;
        status = CONSTANTS.API_STAUTUS_FAILURE;
      }
    }
    return Promise.resolve({ data: response, status });
  }

  public async POST(
    key: string,
    data: any,
    isLocal?: boolean
  ): Promise<RestaurantAPIResponse | any> {
    const url = this.BASE_URL + CONSTANTS.API_CONSTANTS.ADD_RESTAURENT;
    let response: any;
    let status: string;

    if (isLocal) {
      this.storage.SET_DATA(key, data);
      status = CONSTANTS.API_STATUS_SUCCESS;
    } else {
      try {
        response = await this.http.post(url, data);
        status = CONSTANTS.API_STATUS_SUCCESS;
      } catch (error) {
        response = error;
        status = CONSTANTS.API_STAUTUS_FAILURE;
      }
    }
    return Promise.resolve({ data, status });
  }

  public async PUT(
    key: string,
    data: any,
    isLocal?: boolean
  ): Promise<RestaurantAPIResponse | any> {
    const url = this.BASE_URL + CONSTANTS.API_CONSTANTS.UPDATE_RESTAURANT;
    let response: any;
    let status: string;

    if (isLocal) {
      this.storage.SET_DATA(key, data);
      status = CONSTANTS.API_STATUS_SUCCESS;
    } else {
      try {
        response = await this.http.post(url, data);
        status = CONSTANTS.API_STATUS_SUCCESS;
      } catch (error) {
        response = error;
        status = CONSTANTS.API_STAUTUS_FAILURE;
      }
    }
    return Promise.resolve({ data, status });
  }

  public async DELTE(
    id: string,
    key: string,
    data: any,
    isLocal?: boolean
  ): Promise<RestaurantAPIResponse | any> {
    const url =
      this.BASE_URL + CONSTANTS.API_CONSTANTS.UPDATE_RESTAURANT + '/' + id;
    let response: any;
    let status: string;

    if (isLocal) {
      this.storage.SET_DATA(key, data);
      status = CONSTANTS.API_STATUS_SUCCESS;
    } else {
      try {
        response = await this.http.delete(url);
        status = CONSTANTS.API_STATUS_SUCCESS;
      } catch (error) {
        response = error;
        status = CONSTANTS.API_STAUTUS_FAILURE;
      }
    }
    return Promise.resolve({ data, status });
  }
}
