import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  usuario: any = { id_usuario: '' }; // Objeto para el usuario a editar
  originalIdUsuario: string = ''; // Para almacenar el ID original antes de editar

  constructor(
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    const id_usuario = this.activatedRoute.snapshot.paramMap.get('id');
    if (id_usuario) {
      this.originalIdUsuario = id_usuario; // Almacena el ID original
      this.usuarioService.fetchUser().subscribe(
        (res: any[]) => {
          this.usuario = res.find(u => u.id_usuario === id_usuario) || { id_usuario: '' };
        },
        (err) => {
          console.error('Error al obtener el usuario:', err);
        }
      );
    }
  }

  actualizarUsuario() {
    const id_original = this.usuario.id_usuario; // Guarda el ID antes de la actualización
    console.log('Actualizando usuario:', this.usuario);
    this.usuarioService.updateUser(id_original, this.usuario).subscribe(
      (res) => {
        console.log('Usuario actualizado:', res);
        this.router.navigate(['/registros']); // Redirige a la lista de registros
      },
      (err) => {
        console.error('Error al actualizar el usuario:', err);
      }
    );
  }

}
