import { FormControl } from '@angular/forms';

export interface RestaurantForm {
  name: FormControl<string | null>;
  description?: FormControl<string | null>;
  phone?: FormControl<string | null>;
  email?: FormControl<string | null>;
}

export interface RestaurantAPIResponse {
  name: string;
  description?: string;
  phone?: string;
  email?: string;
  id: string;
}
