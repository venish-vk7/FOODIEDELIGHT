import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrestaurantComponent } from './addrestaurant.component';
import { FormControl, FormGroup } from '@angular/forms';

describe('AddrestaurantComponent', () => {
  let component: AddrestaurantComponent;
  let fixture: ComponentFixture<AddrestaurantComponent>;
  const formGroup: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddrestaurantComponent],
      providers: [ { provide: FormGroup, useValue: formGroup } ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
