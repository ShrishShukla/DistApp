import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportProviderLoginComponent } from './transport-provider-login.component';

describe('TransportProviderLoginComponent', () => {
  let component: TransportProviderLoginComponent;
  let fixture: ComponentFixture<TransportProviderLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportProviderLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportProviderLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
