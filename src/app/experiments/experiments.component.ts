import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: string[] = [
    'Mars Soil Sample',
    'Plant Growth in Habitat',
    'Human Bone Density'
  ];
  experimentBeingEdited: string = null;
  constructor() { }

  ngOnInit() {
  }

  add(experimentName: string) {
    if(this.experiments.findIndex( experiment => experiment === experimentName) === -1){
      this.experiments.push(experimentName);
    }
  }
  remove(experiment: string) {
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
  }
  edit(experiment: string) {
    this.experimentBeingEdited = experiment;
  }
  save(experiment: string) {
    this.experiments[this.experiments.indexOf(this.experimentBeingEdited)] = experiment;
    this.experimentBeingEdited = null;
  }

}
