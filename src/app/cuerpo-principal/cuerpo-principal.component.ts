import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonaService } from '../services/persona.service';


@Component({
  selector: 'app-cuerpo-principal',
  templateUrl: './cuerpo-principal.component.html',
  styleUrls: ['./cuerpo-principal.component.css']
})
export class CuerpoPrincipalComponent {
  @Output() personaAgregada: EventEmitter<Persona> = new EventEmitter<Persona>();
  persona: Persona = {
    cedula: '',
    nombre: '',
    apellido: '',
    fechaNacimiento: new Date(),
    sexo: '',
    notauno: 0,
    notados: 0,
    promedio: 0,
    aprobado: false
  }; // Nueva variable para almacenar la persona que se agregará

  listPersona: Persona[] = [];
  form: FormGroup;

  estado(promedio: number): boolean {
    return promedio >= 7;
  }

  agregarPersona( ) {
    const notauno = parseFloat(this.form.value.notauno); // Convertir a número
     const notados = parseFloat(this.form.value.notados); // Convertir a número
    // Tomo los datos del formulario
    const persona: Persona = {
      cedula: this.form.value.cedula,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      fechaNacimiento: this.form.value.fechaNacimiento,
      sexo: this.form.value.sexo, // Quemado hasta que se agregue en el form
      notauno: notauno,
      notados: notados,
      promedio: (notauno+notados) / 2, // Calculo el promedio
      aprobado: this.estado((notauno+notados) / 2), // Aplico la función estado
    };

    // Agrego a la lista
    this.persona = persona;
    this.personaAgregada.emit(persona);
    this.listPersona.push(persona);
    this.personaService.agregarPersona(persona);
    console.log("Se ha registrado a ---", persona);
    // Limpiar el formulario
    this.form.reset();
  }

  constructor(private fb: FormBuilder, private personaService: PersonaService) {
    this.form = this.fb.group({
      cedula: ['', [Validators.required, Validators.minLength(10)]],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      notauno: ['', Validators.required],
      notados: ['', Validators.required],
      sexo: ['', Validators.required],
    });
  }

}
