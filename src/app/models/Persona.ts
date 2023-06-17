export class Persona {
    cedula: string;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    sexo: string;
    aprobado: boolean;
    promedio: number;
    notauno: number;
    notados: number;
    


    constructor(cedula: string, nombre: string, apellido: string, fechaNacimiento: Date, 
        sexo: string, aprobado: boolean, notauno: number, notados: number) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.sexo = sexo;
        this.aprobado = aprobado;
        this.notauno = notauno;
        this.notados = notados
        this.promedio = ((notauno+notados)/2);

    }
}