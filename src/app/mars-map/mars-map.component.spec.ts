import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsMapComponent } from './mars-map.component';

describe('MarsMapComponent', () => {
  let component: MarsMapComponent;
  let fixture: ComponentFixture<MarsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});