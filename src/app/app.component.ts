import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TareasService } from './services/tareas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  listaTareas: string[] = [];
  nuevaTarea = '';

  private _tareaService = inject(TareasService);

  eliminarTarea (i: number){
    this._tareaService.eliminarTarea(i);
    this.listaTareas = this._tareaService.getTareas();
  }

  agregarTarea(): void {
    if (this.nuevaTarea.trim()!== '') {
      this._tareaService.agregarTarea(this.nuevaTarea);
      this.nuevaTarea = '';
      this.listaTareas = this._tareaService.getTareas();
    }
  }

  ngOnInit(): void {
    this.listaTareas = this._tareaService.getTareas();
    
  }
}
