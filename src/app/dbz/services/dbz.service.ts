import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'; 

@Injectable({providedIn: 'root'})
export class DbzService {
    public characters: Character[] = [{
        id: uuid(),
        name: 'Krilin',
        power: 100,
    },{
        id: uuid(),
        name: 'Goku',
        power: 14751,
    }];

    onNewCharacter(character:Character):void {
        const onNewCharacter: Character = {
            id: uuid(),
            name: character.name,
            power: character.power
        }
        this.characters.push(character);
    }
    onDeleteCharacterId(id:string):void{
        this.characters = this.characters.filter((character) => character.id !== id);
    }
    onDeleteCharacter(index:number):void{
        this.characters.splice(index,1);
    }
}