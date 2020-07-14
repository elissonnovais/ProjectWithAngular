import { Component, OnInit } from '@angular/core';
import { curso } from './curso';


@Component({
    selector: 'app-curso-list',
    templateUrl: './curso-list-componets.html'
})


export class CursoListComponent implements OnInit{

    curso: curso[] = [];

    ngOnInit(): void{
        this.curso = [{

            id: 1,
            name: 'elisson novais',
            imageUrl: '',
            preco: 58.25,
            code: 'xps',
            duraction: 120,
            rating: 5.9,
            release: 'desembro, 2 , 2020'
            
        },
        {
            id: 2,
            name: ' novais',
            imageUrl: '',
            preco: 59.25,
            code: 'roland',
            duraction: 250,
            rating: 5.0,
            release: 'desembro, 2 , 2020'
        },
        {
            id: 3,
            name: ' moreira',
            imageUrl: '',
            preco: 59.25,
            code: 'roland',
            duraction: 250,
            rating: 5.0,
            release: 'outubro, 14 , 2020'

        },
        {
            id: 5,
            name: ' novais',
            imageUrl: '',
            preco: 59.25,
            code: 'roland',
            duraction: 250,
            rating: 5.0,
            release: 'novembro, 16, 2020'
        }]
        
    }

}