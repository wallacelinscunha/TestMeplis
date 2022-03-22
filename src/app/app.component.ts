import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Teste JS', url: '/testejs', icon: 'bar-chart' },
    { title: 'Teste UI', url: '/testeui', icon: 'grid' }
  ];
  public labels = [];
  constructor() {}
}
