import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarGruposComponent } from './editar-grupos.component';

describe('EditarGruposComponent', () => {
  let component: EditarGruposComponent;
  let fixture: ComponentFixture<EditarGruposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarGruposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
