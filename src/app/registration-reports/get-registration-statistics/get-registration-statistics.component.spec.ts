import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRegistrationStatisticsComponent } from './get-registration-statistics.component';

describe('GetRegistrationStatisticsComponent', () => {
  let component: GetRegistrationStatisticsComponent;
  let fixture: ComponentFixture<GetRegistrationStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetRegistrationStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetRegistrationStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
