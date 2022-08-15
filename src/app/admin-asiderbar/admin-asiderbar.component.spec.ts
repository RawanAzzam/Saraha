import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAsiderbarComponent } from './admin-asiderbar.component';

describe('AdminAsiderbarComponent', () => {
  let component: AdminAsiderbarComponent;
  let fixture: ComponentFixture<AdminAsiderbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAsiderbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAsiderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
