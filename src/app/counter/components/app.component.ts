import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `<h4> {{ contador }}</h4>

    <button (click)="sumar(1)">Sumar</button>
    <button (click)="resetearContador()">Reset</button>
    <button (click)="restar(1)">Restar</button>`,
})

export class CounterComponent {
    public contador:number = 25;
    
    sumar(valor:number):void{
        this.contador += valor;
    }

    resetearContador():void {
        this.contador = 25;
    }

    restar(valor:number):void {
        this.contador -= valor;
    }
}