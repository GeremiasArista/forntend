import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {
  usuarios: any[] = []; 

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerUsuarios(); 
  }

  obtenerUsuarios() {
    this.usuarioService.fetchUser().subscribe(
      (res: any) => {
        if (res.data) {
          this.usuarios = res.data; 
        } else {
          console.warn('Respuesta sin datos:', res);
        }
      },
      (err) => {
        console.error('Error al obtener usuarios:', err);
      }
    );
  }

  editarUsuario(id_usuario: string) {
    this.router.navigate(['/editar-usuario', id_usuario]); 
  }

  eliminarUsuario(id_usuario: string) {
    console.log(`Eliminando usuario con ID: ${id_usuario}`);
    this.usuarioService.deleteUser(id_usuario).subscribe(
      (res) => {
        console.log('Usuario eliminado:', res);
        this.obtenerUsuarios(); 
      },
      (err) => {
        console.error('Error al eliminar el usuario:', err);
      }
    );
  }
}
