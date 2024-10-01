import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatusOrdenListComponent } from './estatus-orden-list.component';

describe('EstatusOrdenListComponent', () => {
  let component: EstatusOrdenListComponent;
  let fixture: ComponentFixture<EstatusOrdenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstatusOrdenListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstatusOrdenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
