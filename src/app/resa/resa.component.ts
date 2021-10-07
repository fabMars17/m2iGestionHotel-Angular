import { Component, OnInit } from '@angular/core';
import { Resa } from '../classes/resa';
import { ResaService } from '../service/resa.service';

@Component({
  selector: 'app-resa',
  templateUrl: './resa.component.html',
  styleUrls: ['./resa.component.css']
})
export class ResaComponent implements OnInit {

  resas: Array<Resa> = [];

  constructor(private rs : ResaService) { }

  ngOnInit(): void {
    this.rs.loadResa().subscribe(
      data => {
        this.resas = data;
        console.log(data);
      }
    )
  }

}
