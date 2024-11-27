import { Component } from '@angular/core';
import { GruposService } from '../../services/grupos.service'; // Asegúrate de que la ruta sea correcta
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevogupos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nuevogupos.component.html',
  styleUrls: ['./nuevogupos.component.css']
})
export class NuevoguposComponent {
  nuevoGrupo: any = {}; // Objeto para el nuevo grupo

  constructor(private gruposService: GruposService, private router: Router) { }

  crearGrupo() {
    console.log('Creando nuevo grupo:', this.nuevoGrupo);
    this.gruposService.postGrupo(this.nuevoGrupo).subscribe(
      (res) => {
        console.log('Grupo creado:', res);
        this.nuevoGrupo = {}; // Reinicia el formulario
        this.router.navigate(['/grupos']); // Redirige a la lista de grupos (cambia la ruta según tu configuración)
      },
      (err) => {
        console.error('Error al crear el grupo:', err);
      }
    );
  }
}
