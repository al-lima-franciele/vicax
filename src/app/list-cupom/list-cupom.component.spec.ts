import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCupomComponent } from './list-cupom.component';

describe('ListCupomComponent', () => {
  let component: ListCupomComponent;
  let fixture: ComponentFixture<ListCupomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCupomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCupomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
