import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments: string[]
  constructor() {
    this.experiments = [
      'Mars soil sample',
      'Plant growth in habitat',
      'Human bone density'
    ]
   }

  ngOnInit() {
  }

}
