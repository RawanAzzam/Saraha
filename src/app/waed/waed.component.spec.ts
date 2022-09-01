import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaedComponent } from './waed.component';

describe('WaedComponent', () => {
  let component: WaedComponent;
  let fixture: ComponentFixture<WaedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
