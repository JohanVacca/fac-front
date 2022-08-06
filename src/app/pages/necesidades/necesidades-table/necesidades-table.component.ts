import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { UpdateNececidadesTableServiceService } from "src/app/shared/services/general/update-nececidades-table-service.service";
import { NecesidadService } from "src/app/shared/services/necesidad-service/necesidad.service";
import { finalize } from "rxjs/operators";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms'; //Se importa Formbuilder y Validators para crear formularios y validar campos
import { Necesidad } from "src/app/shared/models/necesidad";
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-necesidades-table",
  templateUrl: "./necesidades-table.component.html",
  styleUrls: ["./necesidades-table.component.scss"],
})
export class NecesidadesTableComponent implements OnInit, AfterViewInit {

  id: string | null;

  public displayedColumns2: string[] = [
    "selectedValue",
    "name",
    "programa",
    "subprograma",
    "lineasinv",
    "descripcion",
    "porque",
    "acciones",
  ];

  public necesidades: any;
  public sesion_rol = localStorage.getItem('Role'); //Traemos el rol logeado

  @ViewChild("clasificar") clasificar = new MatSort();
  dataSource = new MatTableDataSource();

  constructor(
    private necesidadService: NecesidadService,
    private updateNececidadesTableServiceService: UpdateNececidadesTableServiceService,
    private fb: FormBuilder,
    private modal:NgbModal,){}

  metodoActualizarNecesidad(form:NgForm){
    const NECESIDAD : Necesidad = {
      name: form.value.nameModal,
      descripcion: form.value.descripcionModal,
      porque: form.value.porqueModal,
      selectedValue: form.value.selectedValueModal,
    }
    console.log(NECESIDAD);
    console.log(form.value);
    console.log(this.id);
    if (this.id !== null) {
      //Editamos producto
      this.necesidadService.patchNecesidad(this.id, NECESIDAD).subscribe(data=>{
        console.log("Editado con éxito");
      }, error =>{
        console.log("Error al agregar");
        console.log(error);
      })
    }
  }

  openModalEdit(idNecesidad){
    this.id = idNecesidad;
    //console.log(this.id);
  }

  ngOnInit(): void {
    this.getNecesidades();
    this.updateNececidadesTableServiceService.updateTablenecesitadesObs$.subscribe(
      () => {
        this.getNecesidades();
      }
    );
  }

  applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public removeNecesidad(id: string): void {
    this.necesidadService
      .removeUnidad(id)
      .pipe(
        finalize(() => this.updateNececidadesTableServiceService.updateTable())
      )
      .subscribe((nuevoCentro) => {});
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.clasificar;
    //console.log(this.clasificar);
  }

  private getNecesidades(): void {
    this.necesidadService.getAll().subscribe((necesidad) => {
      console.log("necesidad >>>", necesidad);
      // @ts-ignore
      this.necesidades = necesidad.necesidades;
      this.dataSource.data = this.necesidades;
    });
  }
}
