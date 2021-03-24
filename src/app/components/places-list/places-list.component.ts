import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {

  places: any;
  currentPlace = null;
  currentIndex = -1;
  constructor(private PlacesService: PlacesService) { }

  ngOnInit(): void {
    console.log("tesstss");
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
console.log('++++++++')
  }
}
