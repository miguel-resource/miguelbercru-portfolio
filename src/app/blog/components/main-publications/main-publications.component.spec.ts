import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPublicationsComponent } from './main-publications.component';

describe('MainPublicationsComponent', () => {
  let component: MainPublicationsComponent;
  let fixture: ComponentFixture<MainPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPublicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
