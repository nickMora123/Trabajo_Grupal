import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CocheService } from 'src/app/services/coche.service';
import { CocheI } from 'src/app/models/coche';




@Component({
  selector: 'app-crear-coche',
  templateUrl: './crear-coche.component.html',
  styleUrls: ['./crear-coche.component.css']
})
export class CrearCocheComponent implements OnInit {

  public form:FormGroup=this.formBuilder.group({
    matricula: ['', [Validators.required]],
    codigo: ['', [Validators.required]],
    modelo: ['', [Validators.required]],
    color: ['', [Validators.required]],
    pvc: ['', [Validators.required]],
    estado: ['', [Validators.required]],

  });

  constructor(
    private formBuilder: FormBuilder,
    private cocheService: CocheService,


    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: CocheI = this.form.value;
    console.log(formValue);
    this.cocheService.createCoche(formValue).subscribe(
      () => {
        console.log('Se ha creado correctamente');


        this.router.navigateByUrl('Coche');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/Coche');
  }

  get matricula() { return this.form.get('matricula'); }
  get codigo() { return this.form.get('codigo'); }
  get modelo() { return this.form.get('modelo'); }
  get color() { return this.form.get('color'); }
  get pvc() { return this.form.get('pvc'); }
  get estado() { return this.form.get('estado'); }

}