import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-safnaj',
  imports: [],
  templateUrl: './safnaj.component.html',
  styleUrl: './safnaj.component.scss'
})
export class SafnajComponent {
  @Input() id!: string;
  @Output()
  removeGoomba = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  crushGoomba() {
    this.removeGoomba.emit(this.id);
    console.log("Goomba id", this.id)
  }
}
