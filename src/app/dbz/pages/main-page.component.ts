import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})
export class MainPageComponent {
    constructor (private DbzService: DbzService) {}

    get getCharacters (): Character[]{
        return [...this.DbzService.characters];
    }
    onDeleteCharacter(id:string):void{
        this.DbzService.onDeleteCharacterId(id);
    }
    onNewCharacter(character:Character):void{
        this.DbzService.onNewCharacter(character);
    }
}