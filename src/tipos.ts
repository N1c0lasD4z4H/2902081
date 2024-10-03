 
//Defenición de tipos:
export type Address =
    {
    calle: string,
    numero: number,
    sector?: string,
    codigoPostal?:string,
    ciudad: string,
    pais: string
}
export type Estudiante ={
    nombre: string,
    apellidos: string,
    edad?: number
    addresses?:Address[]
}