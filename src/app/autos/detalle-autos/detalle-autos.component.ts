import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutosService } from 'src/app/shared/autos.service';

@Component({
  selector: 'app-detalle-autos',
  templateUrl: './detalle-autos.component.html',
  styleUrls: ['./detalle-autos.component.css']
})
export class DetalleAutosComponent {

  tituloPagina = " Detalle de autos";
  auto: any

  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _autosService: AutosService) { }

  ngOnInit(): void {
    let id = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    this.auto = this._autosService.obtenAuto(id);
    this.tituloPagina += ": " + id;
  }

  onBack(): void {
    this._router.navigate([ '/autos' ]);
  }

}
