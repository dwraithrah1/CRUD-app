import { Component, EventEmitter, Output } from '@angular/core';
import{ Creature } from '../creatures.model';

@Component({
  selector: 'app-creature-list',
  templateUrl: './creature-list.component.html',
  styleUrls: ['./creature-list.component.css']
})
export class CreatureListComponent{
  @Output() creatureWasSelected = new EventEmitter<Creature>();
  creatures: Creature[] = [
    new Creature('Hot Elf', 'Elf', 'Sexy as hell elf', 'https://p1.pxfuel.com/preview/492/268/928/woman-magical-mystical-fantasy-female-magic.jpg')
  ]

  onCreatureSelected(creature: Creature){
    this.creatureWasSelected.emit(creature);
  }

}
