import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-character',
  imports: [CommonModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent {

  votes = 0;
  @Input() name!: string;

  @Output()
  removeGoomba = new EventEmitter<string>();
  removeSafnaj: any;

  constructor(private voteService: VoteService) { }

  ngOnInit() {
  }

  jumpForCoins() {
    this.votes = this.voteService.getVotes();
  }
  jump() {
    alert(this.name + ' has jumped');
  }

  crushGoomba(goombaId: any) {
    this.removeGoomba.next(goombaId);
    this.votes = +1;
  }

  crushSafnaj(goombaId: any) {
    this.removeSafnaj.next(goombaId);
    this.votes = +1;
  }

}
