import { Component } from '@angular/core';
import { SafnajComponent } from "../safnaj/safnaj.component";
import { CharacterComponent } from "../character/character.component";

@Component({
  selector: 'app-srilanka',
  imports: [SafnajComponent, CharacterComponent],
  templateUrl: './srilanka.component.html',
  styleUrl: './srilanka.component.scss'
})

export class SrilankaComponent {
  enemies: Array<string> = ['0', '1', '2', '3'];
  constructor() {

  }

  ngOnInit() {
  }

  removeGoomba(id: any) {
    const i = this.enemies.indexOf(id);
    if (i !== -1) {
      this.enemies.splice(i, 1);
    }

  }
}