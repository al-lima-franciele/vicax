import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCupomComponent } from './home-cupom.component';

describe('HomeCupomComponent', () => {
  let component: HomeCupomComponent;
  let fixture: ComponentFixture<HomeCupomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCupomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCupomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
