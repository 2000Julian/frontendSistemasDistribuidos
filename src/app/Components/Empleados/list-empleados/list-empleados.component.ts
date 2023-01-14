import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../../Class/empleado';
import { EmpleadoService } from '../../../Services/empleado.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {

  empleados:Empleado[];

  constructor( private empleadoService:EmpleadoService, private router:Router) { }


  ngOnInit(): void {
    console.log("obtener empleados", this.empleados)
    this.obtenerEmpleados();
  }

  actualizarEmpleado(id:String){
    this.router.navigate(['actualizar-empleado', id]);
  }

  private obtenerEmpleados(){
    this.empleadoService.obtenerListaDeEmpleados().subscribe(dato => {
      this.empleados = dato['data'];
    });
  }


  eliminarEmpleado(id:String){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al empleado",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.empleadoService.eliminarEmpleado(id).subscribe(dato => {
          this.obtenerEmpleados();
          swal(
            'Empleado eliminado',
            'El empleado ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }


  verDetallesDelEmpleado(id:String){
    this.router.navigate(['empleado-detalles',id]);
  }

}





