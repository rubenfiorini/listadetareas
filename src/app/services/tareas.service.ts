import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  //creamos un variable para el local storage`
  private localStorageKey = 'listaTareas';

  getTareas(){
    //en el caso que en el localStorage exista algo lo trae y si no crea un array vacio
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];
  }

  agregarTarea(tarea: string){
    //obtenemos las tareas actuales del local storage
    const tareas = this.getTareas();
    //agregamos la nueva tarea al array
    tareas.push(tarea);
    //volvemos a guardar el array en el local storage
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
  }

  eliminarTarea(index: number){
    //obtenemos las tareas actuales del local storage
    const tareas = this.getTareas();
    //eliminamos la tarea en el indice especificado
    tareas.splice(index, 1);
    //volvemos a guardar el array en el local storage
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
  }
}
