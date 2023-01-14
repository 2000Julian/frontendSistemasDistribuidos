import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../Class/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //Obtiene listado de empleados 
  private baseURL = "http://localhost:4000/api/v1/workouts";//"http://localhost:8080/api/empleados/listar"

  constructor( private httpClient : HttpClient) { }

  //Obtenemos los empleados
  obtenerListaDeEmpleados():Observable<Empleado[]>{
    const datos = this.httpClient.get<Empleado[]>(`${this.baseURL}`)
    return datos;
  }


  //Metodo para registrar empleado
  registrarEmpleado(empleado:Empleado): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, empleado);
  }

  //Metodo para actualizar el empleado
  actualizarEmpleado(id:number,empleado:Empleado) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,empleado);
  }

  //Metodo para obtener o buscar un empleado
  obtenerEmpleadoPorId(id:number):Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);
  }

  //metodo para eliminar un empleado
  eliminarEmpleado(id:String):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  
}
