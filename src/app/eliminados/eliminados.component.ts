import { Component } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from '../services/persona.service';

export interface Person {
  nombre: string;
  apellido: string;
  correoElectronico: string;
  ci: string;
  cargo: string;
}

@Component({
  selector: 'app-eliminados',
  templateUrl: './eliminados.component.html',
  styleUrls: ['./eliminados.component.css']
})


export class EliminadosComponent {
  radioButtonSeleccionado = 'Todos';
  radioButtonAprobadoSeleccionado: string = 'Todos';
  personasFiltradas: Persona[] = [];


  listPersona: Persona[] = [
    { cedula: '0919922252', nombre: 'Juan', apellido: 'Perez', fechaNacimiento: new Date('11/05/1990'), sexo: 'Masculino', aprobado: true, notauno: 10, notados: 10, promedio: 10 },
    { cedula: '0919922252', nombre: 'Anna', apellido: 'Perez', fechaNacimiento: new Date('11/05/1990'), sexo: 'Femenino', aprobado: false, notauno: 0, notados: 0, promedio:0 },
    { cedula: '0919922252', nombre: 'Juan', apellido: 'Perez', fechaNacimiento: new Date('11/05/1990'), sexo: 'Masculino', aprobado: false, notauno: 0, notados: 0, promedio: 0 },
    { cedula: '0919922252', nombre: 'Juan', apellido: 'Perez', fechaNacimiento: new Date('11/05/1990'), sexo: 'Masculino', aprobado: true, notauno: 10, notados: 10, promedio: 10 },
    { cedula: '0919922252', nombre: 'Juan', apellido: 'Perez', fechaNacimiento: new Date('11/05/1990'), sexo: 'Masculino', aprobado: true, notauno: 10, notados: 10, promedio: 10 },
  ]


  agregarPersona(persona: Persona): void {
    this.listPersona.push(persona);
    this.aplicarFiltro(); // Aplicar el filtro si es necesario
  }

  constructor(private personaService: PersonaService) {

  }

  ngOnInit(): void {
    this.listPersona = this.personaService.obtenerPersonas();
    this.aplicarFiltro();
  }

  
  aplicarFiltro(): void {
    this.personasFiltradas = this.listPersona.filter((persona) => {
      return (
        (this.radioButtonSeleccionado === 'Todos' || this.radioButtonSeleccionado === persona.sexo) &&
        (this.radioButtonAprobadoSeleccionado === 'Todos' || this.radioButtonAprobadoSeleccionado === persona.aprobado.toString())
      );
    });
  }
  
  obtenerPromedioGeneral(): number {
    const promediosFinales = this.listPersona.map(persona => persona.promedio);
    const totalPersonas = promediosFinales.length;
    const sumaPromedios = promediosFinales.reduce((a, b) => a + b, 0);
    return sumaPromedios / totalPersonas;
  }
  
  obtenerTotalPersonas(): number {
    return this.listPersona.length;
  }

  obtenerTotalMasculino(): number {
    return this.listPersona.filter(list => list.sexo ==='Masculino').length;
  }

  obtenerTotalFemenino(): number {
    return this.listPersona.filter(list => list.sexo === 'Femenino').length;
  }

  obtenerTotalAprobados(): number{
    return this.listPersona.filter(item => item.aprobado === true).length;
  }

  obtenerTotalReprobados(): number{
    return this.listPersona.filter(item => item.aprobado === false).length;
  }


}

