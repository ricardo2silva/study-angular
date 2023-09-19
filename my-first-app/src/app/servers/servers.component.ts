import { Component } from '@angular/core';

@Component({
  // seletor normal
  //selector: 'app-servers',
  
  // 1- seletor como atributo
  //selector: '[app-servers]',

  // 2- seletor como classe
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
