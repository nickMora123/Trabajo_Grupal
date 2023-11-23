import { Component, OnInit } from '@angular/core';
import { CocheI } from 'src/app/models/coche';
import { Router } from '@angular/router';
import { CocheService } from '../../../services/coche.service'
import {Message,MessageService} from 'primeng/api';

@Component
({
  selector: 'app-mostrar-coche',
  templateUrl: './mostrar-coche.component.html',
  styleUrls: ['./mostrar-coche.component.css']
})

export class MostrarCocheComponent implements OnInit 
{
  public coche:CocheI[] = []
  public displayedColumns: string[] = ["id", "matricula","codigo","modelo","color","color","pvc","estado"]
  public msgs1: Message[]=[];

  constructor
  (
    private CocheService: CocheService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void 
  {
    this.mostrarCoches()
  }

  mostrarCoches() 
  {
    this.CocheService.getAllCoche()
     .subscribe
     (
      {
        next: (data) => 
        {
          this.coche = data.coche
          console.log(this.coche)
        }
      } 
    )
  }
  
  eliminar(id: number): void{
    this.router.navigateByUrl('/Coche');
    this.CocheService.deleteCoche(id).subscribe(
      () => {
        this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Coche Eliminado', life:5000});
        this.mostrarCoches();
        
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/Coche');

      }
    );
  }

  imprimir(id: number){

  }
}
