import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CocheService } from 'src/app/services/coche.service';
import { CocheI } from 'src/app/models/coche';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-actualizar-coche',
  templateUrl: './actualizar-coche.component.html',
  styleUrls: ['./actualizar-coche.component.css']
})
export class ActualizarCocheComponent implements OnInit {
  public id: number =0;
  public form:FormGroup=this.formBuilder.group({
    id: [''],
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
    private messageService: MessageService,   
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.getCoche(this.id);

  }

  getCoche(id: number){
    this.cocheService.getOneCoche(id)
    .subscribe({
      next: (data) => {
        this.form.setValue(data)
      }
    })
  }

  onSubmit(): void {
    const formValue: CocheI = this.form.value;
    const id: number =  this.form.value.id
    this.cocheService.updateCoche(id, formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        setTimeout(()=>{                  
          this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Coche Actualizado', life:5000});

     }, 0);
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
