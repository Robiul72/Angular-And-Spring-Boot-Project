import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseViewComponentComponent } from './house-view-component.component';

describe('HouseViewComponentComponent', () => {
  let component: HouseViewComponentComponent;
  let fixture: ComponentFixture<HouseViewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HouseViewComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HouseViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
