import { Component, OnInit } from '@angular/core';
import { GruposService } from '../../services/grupos.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registros-grupos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registros-grupos.component.html',
  styleUrls: ['./registros-grupos.component.css']
})
export class RegistrosGruposComponent implements OnInit {
  grupos: any[] = []; // Lista de grupos
  message: string = ''; // Para manejar el mensaje en caso de error

  constructor(private gruposService: GruposService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerGrupos(); // Cargar grupos al iniciar el componente
  }

  obtenerGrupos() {
    this.gruposService.fetchGrupos().subscribe(
      (res: any) => {
        if (Array.isArray(res)) {
          this.grupos = res; // Asigna los datos si la respuesta es un array
        } else {
          this.message = res.message || 'Error al obtener los grupos';
        }
      },
      (err) => {
        console.error('Error al obtener grupos:', err);
        this.message = 'No se pudieron obtener los grupos.';
      }
    );
  }

  editarGrupo(id_grupo: string) {
    this.router.navigate(['/editar-grupos', id_grupo]); // Redirige a la ruta con el id_grupo
  }

  eliminarGrupo(id_grupo: string) {
    console.log(`Eliminando grupo con ID: ${id_grupo}`);
    this.gruposService.deleteGrupo(id_grupo).subscribe(
      (res) => {
        console.log('Grupo eliminado:', res);
        this.obtenerGrupos(); // Actualiza la lista después de eliminar
      },
      (err) => {
        console.error('Error al eliminar el grupo:', err);
      }
    );
  }
}
