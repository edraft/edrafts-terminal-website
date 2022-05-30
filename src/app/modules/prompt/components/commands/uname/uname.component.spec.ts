import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnameComponent } from './uname.component';

describe('UnameComponent', () => {
  let component: UnameComponent;
  let fixture: ComponentFixture<UnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
