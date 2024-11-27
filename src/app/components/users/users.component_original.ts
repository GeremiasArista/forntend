import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service_original';
import { CommonModule } from '@angular/common';  // Importar CommonModule para usar ngFor

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  arrayUser: any = []; 
  constructor(public usuarioService: UsuarioService) { }


  ngOnInit(): void {
    this.fetch();
    

  }

  fetch() {
    
    this.usuarioService.fetchUser().subscribe(result=>{
      this.arrayUser=result;
      
    });

  }
}


/*import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

}*/
