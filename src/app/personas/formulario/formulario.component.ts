import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Persona } from '../../persona.model';
import { FormsModule } from '@angular/forms';
import { LoggingService } from '../../LoggingService.service';
import { PersonasService } from '../../personas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{

  nombreInput:string;
  apellidoInput:string;
  index:number;
  modoEdicion:number;
  nameButton:string = 'Agregar';

  constructor(private loggingService:LoggingService,
              private personasService:PersonasService,
              private router:Router,
              private route:ActivatedRoute){
                this.personasService.saludar.subscribe(
                  (indice:number) => alert("El indice es: " + (indice + 1))
                );
              } 
  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];

    if(this.modoEdicion != null && this.modoEdicion === 1){
      this.nameButton = 'Guardar Cambios';
      let persona : Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPersona(){
    let newPerson = new Persona(this.nombreInput,this.apellidoInput);
    if(this.modoEdicion != null && this.modoEdicion === 1){
      this.personasService.modificarPersona(this.index,newPerson);
      this.router.navigate(['/']);
    }else{
      this.personasService.agregarPersona(newPerson);
      this.router.navigate(['/']);
    }
    this.router.navigate(['personas']);
  }
  eliminarPersona(){
    if(this.index != null){
      this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }
  close(){
    this.router.navigate(['/']);
  }
  ocultarBotonEditar(): boolean {
    return this.loggingService.getMostrarBotonEditar();
  }

  ocultarBotonEliminar(): boolean {
    return this.loggingService.getMostrarBotonEliminar();
  }
}
