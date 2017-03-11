import { Component } from '@angular/core';
import { Summoner } from './summoner';

@Component({
  moduleId: module.id,
  selector: 'grabName',
  templateUrl: './grabName.component.html'
})
export class GrabNameComponent {

  model = new Summoner('Kirby25');
  submitted = false;

  onSubmit() { this.submitted = true; }

}