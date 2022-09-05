import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApppComponent } from './appp.component';

describe('ApppComponent', () => {
  let component: ApppComponent;
  let fixture: ComponentFixture<ApppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
