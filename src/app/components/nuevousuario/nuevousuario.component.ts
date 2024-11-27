import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevousuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nuevousuario.component.html',
  styleUrl: './nuevousuario.component.css'
})
export class NuevousuarioComponent {
  nuevoUsuario: any = {}; // Objeto para el nuevo usuario

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  crearUsuario() {
    console.log('Creando nuevo usuario:', this.nuevoUsuario);
    this.usuarioService.postUser(this.nuevoUsuario).subscribe(
      (res) => {
        console.log('Usuario creado:', res);
        this.nuevoUsuario = { id_usuario: '' }; // Reinicia el formulario
        this.router.navigate(['/registros']); // Redirige a la lista de registros
      },
      (err) => {
        console.error('Error al crear el usuario:', err);
      }
    );
  }

}
