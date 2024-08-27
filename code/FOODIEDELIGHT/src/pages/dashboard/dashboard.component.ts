import {
  Component,
  NO_ERRORS_SCHEMA,
  OnInit,
} from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { PopupComponent } from '../../components/popup/popup.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DataService } from '../../services/data.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { RestaurantAPIResponse } from '../../interfaces/restaurentForm';
import { NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatDividerModule,
    MatDialogModule,
    MatButtonModule,
    PopupComponent,
    MatGridListModule,
    NgFor,
    NgIf,
    MatIconModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  formData: any;
  restaurentList: RestaurantAPIResponse[] = [];

  constructor(
    private dialog: MatDialog,
    private dataSvc: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataSvc
      .getAllrestaurants(true)
      .then((res: RestaurantAPIResponse[]) => {
        this.restaurentList = res;
      });
  }

  addrestaurant() {
    const dialogRef = this.dialog.open(PopupComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.formData = result?.data;
      this.setrestaurantInfo();
    });
  }

  setrestaurantInfo() {
    const data = this.formData;
    if (data) {
      data['id'] = Date.now();
      this.dataSvc.addNewrestaurant(this.formData, true).then((res: any) => {
        this.restaurentList = res.data;
      });
    }
  }

  editRestaurant(data: any) {
    const dialogRef = this.dialog.open(PopupComponent, { data });
    dialogRef.afterClosed().subscribe((result) => {
      if (result?.id) {
        this.dataSvc
          .updaterestaurant(result.id, result.data, true)
          .then((res: any) => {
            this.restaurentList = res.data;
          });
      }
    });
  }

  deleteRestaurant(data: any) {
    this.dataSvc.deleterestaurant(data.id, true).then((res: any) => {
      this.restaurentList = res.data;
    });
  }

  viewRestaurant(data: any) {
    this.router.navigate(['restaurant', data.id]);
  }
}
