import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantAPIResponse } from '../../interfaces/restaurentForm';
import { DataService } from '../../services/data.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.scss',
})
export class restaurantComponent {
  id!: string;
  restaurantData!: RestaurantAPIResponse;

  constructor(private router: ActivatedRoute, private dataSvc: DataService) {
    this.router.params.subscribe(({ id }: any) => {
      this.id = id;
      this.getRestaurentInfo(id);
    });
  }

  getRestaurentInfo(id: string) {
    this.dataSvc.getrestaurant(id, true).then((res) => {
      this.restaurantData = res;
    });
  }
}
