import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSideberComponent } from './main-sideber.component';

describe('MainSideberComponent', () => {
  let component: MainSideberComponent;
  let fixture: ComponentFixture<MainSideberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainSideberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainSideberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
