import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { Empleado } from '../../../Class/empleado';
import { EmpleadoService } from '../../../Services/empleado.service';

@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrls: ['./empleado-detalles.component.css']
})
export class EmpleadoDetallesComponent implements OnInit {

  id:number;
  empleado:Empleado;
  constructor(private route:ActivatedRoute, private empleadoService:EmpleadoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado();
    this.empleadoService.obtenerEmpleadoPorId(this.id).subscribe(dato =>{
      this.empleado = dato['data'];
      swal(`Detalles del empleado ${this.empleado.nombre}`);
    })
  }

}
