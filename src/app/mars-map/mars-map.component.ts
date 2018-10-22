import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tm-mars-map',
  templateUrl: './mars-map.component.html',
  styleUrls: ['./mars-map.component.css']
})
export class MarsMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleAction(event): void {
      console.log(event.srcElement.classList);
  }

}
