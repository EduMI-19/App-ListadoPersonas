import { Component, OnInit } from '@angular/core';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from "./formulario/formulario.component";
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { LoggingService } from '../LoggingService.service';

@Component({
    selector: 'app-personas',
    standalone: true,
    templateUrl: './personas.component.html',
    styleUrl: './personas.component.css',
    imports: [PersonaComponent, FormularioComponent, CommonModule, RouterOutlet ]
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];

  constructor(
    private personasService: PersonasService,
    private loggingService: LoggingService,
    private router:Router){}

  ngOnInit():void {
    this.personasService.getPersonas().subscribe(
      (personas : Persona[]) => {
        this.personas = personas,
        this.personasService.setPersonas(personas)
      }
    );
  }
  agregar(){
    this.router.navigate(['personas/agregar'])
    this.loggingService.setMostrarBotonEliminar(true);
    this.loggingService.setMostrarBotonEditar(false);
  }

  editarPersona(indice : number) {
    this.router.navigate(['/personas', indice],{queryParams: {modoEdicion:'1'}});
    this.loggingService.setMostrarBotonEliminar(true);
    this.loggingService.setMostrarBotonEditar(false);
  }
  eliminarPersona(indice : number) {
    this.router.navigate(['/personas', indice],{queryParams: {modoEdicion:'1'}});
    this.loggingService.setMostrarBotonEliminar(false);
    this.loggingService.setMostrarBotonEditar(true);
  }
}
