export class Perfil {
    //creamos los atributos de la clase
    public id:Number;
    public nombre:String;
    public genero:String;
    public edad:Number;
    public descripcion:String;
    public image:String;
    
    constructor(id: Number, nombre: string, genero: string, edad: Number, descripcion: string, image:String){
        this.id = id;
        this.nombre = nombre;
        this.genero = genero;
        this.edad = edad;
        this.descripcion = descripcion;
        this.image = image;
    }
}
