import { Component, OnInit } from '@angular/core';
import { GruposService } from '../../services/grupos.service'; // Asegúrate de importar tu servicio
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grupos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {
  grupos: any[] = [];  // Variable para almacenar los grupos obtenidos

  constructor(private gruposService: GruposService) { }

  ngOnInit(): void {
    this.fetchGrupos();  // Llama a la función para obtener grupos al iniciar el componente
  }

  fetchGrupos(): void {
    this.gruposService.fetchGrupos().subscribe(
      (res) => {
        this.grupos = res;  // Almacena la respuesta en la variable grupos
      },
      (err) => {
        console.error('Error al obtener grupos:', err);
      }
    );
  }
}
