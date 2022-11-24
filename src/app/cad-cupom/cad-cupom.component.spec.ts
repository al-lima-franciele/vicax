import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadCupomComponent } from './cad-cupom.component';

describe('CadCupomComponent', () => {
  let component: CadCupomComponent;
  let fixture: ComponentFixture<CadCupomComponent>; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadCupomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadCupomComponent); 
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
