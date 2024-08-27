import {
  Component,
  Inject,
  inject,
  NO_ERRORS_SCHEMA,
  OnInit,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { AddrestaurantComponent } from '../addrestaurant/addrestaurant.component';
import {
  RestaurantAPIResponse,
  RestaurantForm,
} from '../../interfaces/restaurentForm';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, AddrestaurantComponent],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss',
})
export class PopupComponent implements OnInit {
  readonly dialog = inject(MatDialogRef);
  restaurantForm = new FormGroup<RestaurantForm>({
    name: new FormControl(''),
    description: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
  });
  public restaurantData: RestaurantAPIResponse = inject(MAT_DIALOG_DATA);

  ngOnInit(): void {
    this.restaurantForm.setValue({
      name: this.restaurantData?.name || '',
      description: this.restaurantData?.description || '',
      phone: this.restaurantData?.phone || '',
      email: this.restaurantData?.email || '',
    });
  }

  addrestaurant() {
    this.dialog.close({ data: this.restaurantForm.getRawValue() });
  }

  editRestaurant() {
    this.dialog.close({
      id: this.restaurantData.id,
      data: this.restaurantForm.getRawValue(),
      edit: true,
    });
  }
}
