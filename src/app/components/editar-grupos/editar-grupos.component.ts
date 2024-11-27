import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GruposService } from '../../services/grupos.service'; // Asegúrate de que el servicio esté creado
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-grupos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-grupos.component.html',
  styleUrls: ['./editar-grupos.component.css']
})
export class EditarGruposComponent implements OnInit {
  grupo: any = { id_grupo: '' }; // Objeto para el grupo a editar
  originalIdGrupo: string = ''; // Para almacenar el ID original antes de editar

  constructor(
    private gruposService: GruposService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerGrupo();
  }

  obtenerGrupo() {
    const id_grupo = this.activatedRoute.snapshot.paramMap.get('id');
    if (id_grupo) {
      this.originalIdGrupo = id_grupo; // Almacena el ID original
      this.gruposService.fetchGrupos().subscribe(
        (res: any[]) => {
          this.grupo = res.find(g => g.id_grupo === id_grupo) || { id_grupo: '' };
        },
        (err) => {
          console.error('Error al obtener el grupo:', err);
        }
      );
    }
  }

  actualizarGrupo() {
    console.log('Actualizando grupo:', this.grupo);
    this.gruposService.updateGrupo(this.originalIdGrupo, this.grupo).subscribe(
        (res) => {
            console.log('Grupo actualizado:', res);
            this.router.navigate(['/registros-grupos']); // Redirige a la lista de grupos después de actualizar
        },
        (err) => {
            console.error('Error al actualizar el grupo:', err);
        }
    );
  }
}
