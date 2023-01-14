import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../../../Class/empleado';
import { EmpleadoService } from '../../../Services/empleado.service';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado : Empleado = new Empleado();

  constructor( private empleadoService: EmpleadoService, private router:Router) { }

  ngOnInit(): void {
    console.log("empleado init : " +this.empleado);
  }

  guardarEmpleado(){
    console.log("dato a guardad 1", this.empleado);
    console.log("dato a guardad 2", this.empleado['data']);
     this.empleadoService.registrarEmpleado(this.empleado).subscribe(dato => {
      console.log("dato a guardad",dato);
      this.irALaListaDeEmpleados();
     }, error => console.log(error));
  }

  irALaListaDeEmpleados(){
    this.router.navigate(['/empleados']);
  }

  onSubmit(){
    this.guardarEmpleado();
  }

}
