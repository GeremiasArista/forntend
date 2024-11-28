import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistrosGruposComponent } from './registros-grupos.component';
import { GruposService } from '../../services/grupos.service';

describe('RegistrosGruposComponent', () => {
  let component: RegistrosGruposComponent;
  let fixture: ComponentFixture<RegistrosGruposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrosGruposComponent, HttpClientTestingModule, RouterTestingModule],
      providers: [GruposService]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrosGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a message when no groups are returned', () => {
    component.message = 'No hay grupos disponibles';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('No hay grupos disponibles');
  });
});
