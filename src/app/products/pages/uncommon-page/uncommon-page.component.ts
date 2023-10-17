import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  // i18n select
  public name: string = 'Mia';
  public gender: 'male' | 'female' = 'female';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }
  changeClient(): void {
    this.name = 'Jacky';
    this.gender = 'male';
  }

  //i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];

  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2  personas esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient(): void {
    this.clients.shift()
  }

  //KeyValue Pipe
  public person = {
    name: 'Mia',
    age: 39,
    address: 'Buenos Aires, Argentina'
  }

  //Async Pipe
  public myObservabletimer: Observable<number> = interval(2000).pipe(
    tap(value => {
      console.log('tap', value);
    })
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
      console.log('tenemos data en la promesa');

    }, 3500);
  })



}
