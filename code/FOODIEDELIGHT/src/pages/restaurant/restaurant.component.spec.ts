import { ComponentFixture, TestBed } from '@angular/core/testing';

import { restaurantComponent } from './restaurant.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { DataService } from '../../services/data.service';
import { StorageService } from '../../services/storage.service';

const fakeActivatedRoute = {
  snapshot: { data: {} },
  params: {
    subscribe: () => {},
  },
} as ActivatedRoute;

describe('restaurantComponent', () => {
  let component: restaurantComponent;
  let fixture: ComponentFixture<restaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [restaurantComponent, RouterTestingModule],
      declarations: [],
      providers: [
        HttpClient,
        HttpHandler,
        ApiService,
        StorageService,
        DataService,
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(restaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
