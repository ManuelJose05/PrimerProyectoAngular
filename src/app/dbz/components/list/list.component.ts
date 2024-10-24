import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  // @Output()
  // public onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  @Output()
  public onDeleteCharacter2: EventEmitter<string> = new EventEmitter();

  // deleteCharacter (index:number):void{
  //   this.onDeleteCharacter.emit(index);
  // }
  deleteCharacterId(id?:string):void{
    if (!id) return;
    this.onDeleteCharacter2.emit(id);
  }

  @Input()
  
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 157,
  },{
    name: 'Picorro',
    power: 10,
  }];
}
