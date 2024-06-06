import { Component } from '@angular/core';
import { TatuajeService } from '../services/tatuaje.service';

@Component({
  selector: 'app-tatuajes',
  templateUrl: './tatuajes.component.html',
  styleUrl: './tatuajes.component.css'
})
export class TatuajesComponent {
  tatuajes!: any[];

  constructor(
    private tatuajeService: TatuajeService,
  ) {}

  ngOnInit(): void {
    // Obtener los productos del servicio al inicializar el componente
    this.tatuajeService.getTatuajes().subscribe(tatuajes => {
      this.tatuajes = tatuajes;
    });
  }
}
