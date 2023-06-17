import { Injectable } from '@angular/core';
import { Persona } from '.././models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private listPersona: Persona[] = [];

  agregarPersona(persona: Persona): void {
    this.listPersona.push(persona);
  }

  obtenerPersonas(): Persona[] {
    return this.listPersona;
  }
}
