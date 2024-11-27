import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { NuevousuarioComponent } from './components/nuevousuario/nuevousuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { NuevoguposComponent } from './components/nuevogupos/nuevogupos.component';
import { EditarGruposComponent } from './components/editar-grupos/editar-grupos.component';
import { RegistrosGruposComponent } from './components/registros-grupos/registros-grupos.component';

export const routes: Routes = [
    { path: 'usuario', component: UsersComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'registros', component: RegistrosComponent },
    { path: 'nuevousuario', component: NuevousuarioComponent },
    { path: 'editarusuario', component: EditarUsuarioComponent },
    { path: 'grupos', component: GruposComponent },
    { path: 'nuevogrupos', component: NuevoguposComponent },
    { path: 'editar-grupos/:id', component: EditarGruposComponent }, // Cambiado a 'editar-grupos'
    { path: 'registrosgrupos', component: RegistrosGruposComponent },
    { path: 'editar-usuario/:id_usuario', component: EditarUsuarioComponent },
    { path: '', redirectTo: '/registros', pathMatch: 'full' }
];
