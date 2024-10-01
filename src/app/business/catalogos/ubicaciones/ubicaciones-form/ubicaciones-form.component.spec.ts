import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionesFormComponent } from './ubicaciones-form.component';

describe('UbicacionesFormComponent', () => {
  let component: UbicacionesFormComponent;
  let fixture: ComponentFixture<UbicacionesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UbicacionesFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UbicacionesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
