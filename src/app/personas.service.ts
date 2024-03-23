import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';
import { DataServices } from './data.services';
import { Observable } from 'rxjs';

@Injectable()
export class PersonasService{
    personas: Persona[] = [];

    saludar = new EventEmitter<number>();

    constructor(private loggingService:LoggingService,
                private dataServices:DataServices
    ){}

    setPersonas(personas:Persona[]){
        this.personas = personas;
    }

    getPersonas(): Observable<Persona[]>{
        return this.dataServices.cargarPersonas();
    }

    agregarPersona(persona: Persona){
        this.loggingService.enviaMensajeAConsola("Enviamos persona: " + persona.nombre);
        if(this.personas == null){
            this.personas = []
        }
        this.personas.push(persona)
        this.dataServices.guardarPersonas(this.personas);
    }
    encontrarPersona(index:number){
        let persona:Persona = this.personas[index];
        return persona;
    }    
    modificarPersona(index:number, persona:Persona){
        let newPerson = this.personas[index];
        newPerson.nombre = persona.nombre;
        newPerson.apellido = persona.apellido;
        this.dataServices.modificarPersona(index,persona);
    }
    eliminarPersona(index:number){
        this.personas.splice(index,1);
        this.dataServices.eliminarPersona(index);
        this.modificarArregloPersonas();
    }

    modificarArregloPersonas(){
        if(this.personas != null){
            this.dataServices.guardarPersonas(this.personas);
        }
    }
}