import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatusOrdenFormComponent } from './estatus-orden-form.component';

describe('EstatusOrdenFormComponent', () => {
  let component: EstatusOrdenFormComponent;
  let fixture: ComponentFixture<EstatusOrdenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstatusOrdenFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstatusOrdenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
