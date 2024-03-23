export class LoggingService{
    button: boolean = true;
    title: string;
    private mostrarBotonEditar: boolean = true;
    private mostrarBotonEliminar: boolean = true;
    enviaMensajeAConsola(mensaje:string){
        console.log(mensaje)
    }

    Login() {
        this.title = "Listado-Personas";
        this.button = true;
    }
    
    LogOut() {
        this.title = "Welcome Back";
        this.button = false;
    }
    getMostrarBotonEditar(): boolean {
        return this.mostrarBotonEditar;
    }
    
    setMostrarBotonEditar(valor: boolean) {
        this.mostrarBotonEditar = valor;
    }
    
    getMostrarBotonEliminar(): boolean {
      return this.mostrarBotonEliminar;
    }
    
    setMostrarBotonEliminar(valor: boolean) {
        this.mostrarBotonEliminar = valor;
    }
}