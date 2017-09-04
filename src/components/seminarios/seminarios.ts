import { Component } from '@angular/core';

/**
 * Generated class for the SeminariosComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'seminarios',
  templateUrl: 'seminarios.html'
})
export class SeminariosComponent {

  text: string;

  constructor() {
    console.log('Hello SeminariosComponent Component');
    this.text = 'Hello World';
  }

}
