import { Component, Input } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RestaurantForm } from '../../interfaces/restaurentForm';

@Component({
  selector: 'app-addrestaurant',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './addrestaurant.component.html',
  styleUrl: './addrestaurant.component.scss'
})
export class AddrestaurantComponent {

  @Input() restaurantForm:FormGroup<RestaurantForm> | any;
}
