import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosGruposComponent } from './registros-grupos.component';

describe('RegistrosGruposComponent', () => {
  let component: RegistrosGruposComponent;
  let fixture: ComponentFixture<RegistrosGruposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrosGruposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrosGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
