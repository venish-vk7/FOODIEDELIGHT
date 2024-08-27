import { Injectable } from '@angular/core';
import { CONSTANTS } from '../utils/constant';
import { ApiService } from './api.service';
import { RestaurantAPIResponse } from '../interfaces/restaurentForm';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private apiService: ApiService) {}

  async getAllrestaurants(isLocal: boolean): Promise<RestaurantAPIResponse[]> {
    const key = CONSTANTS.STORAGE_KEYS.RESTURENT_LIST;
    const response = await this.apiService.GET('ALL', key, isLocal);
    return response?.data || [];
  }

  async getrestaurant(
    id: string,
    isLocal: boolean
  ): Promise<RestaurantAPIResponse> {
    const key = CONSTANTS.STORAGE_KEYS.RESTURENT_LIST;
    const apiResponse = await this.apiService.GET(id, key, isLocal);
    let finalRes: any;

    if(apiResponse?.data) {
      finalRes = apiResponse.data.find((item: any) => item.id.toString() === id);
    }
    return finalRes;
  }

  async addNewrestaurant(
    data: RestaurantAPIResponse,
    isLocal: boolean
  ): Promise<RestaurantAPIResponse[]> {
    const key = CONSTANTS.STORAGE_KEYS.RESTURENT_LIST;
    const existingData = await this.apiService.GET('ALL', key, isLocal);
    let res: any;
    if (existingData.data === null) {
      res = await this.apiService.POST(key, [data], isLocal);
    } else {
      existingData.data.push(data);
      res = await this.apiService.POST(key, existingData.data, isLocal);
    }
    return res;
  }

  async updaterestaurant(
    id: string,
    data: RestaurantAPIResponse,
    isLocal: boolean
  ) {
    const key = CONSTANTS.STORAGE_KEYS.RESTURENT_LIST;
    const existingData = await this.apiService.GET('ALL', key, isLocal);
    let res: any;
    // update functionality here
    let arr = existingData.data;
    arr.splice(
      arr.findIndex((item: any) => item.id === id),
      1,
      { ...data, id }
    );
    res = await this.apiService.PUT(key, arr, isLocal);
    return res;
  }

  async deleterestaurant(id: string, isLocal: boolean) {
    const key = CONSTANTS.STORAGE_KEYS.RESTURENT_LIST;
    const existingData = await this.apiService.GET('ALL', key, isLocal);
    let res: any;
    // delete functionality here
    let arr = existingData.data;
    arr.splice(
      arr.findIndex((item: any) => item.id === id),
      1
    );
    res = await this.apiService.DELTE(id, key, arr, isLocal);
    return res;
  }
}
