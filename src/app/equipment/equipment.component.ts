import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = [
    'Habitat Dome',
    'Drones',
    'Food Containers',
    'Oxygen Tanks'
  ];
  itemBeingEdited: string = null;
  constructor() { }

  ngOnInit() {
  }

  add(itemName: string) {
    if(this.equipment.findIndex( item => item === itemName) === -1){
      this.equipment.push(itemName);
    }
  }
  remove(item: string) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }
  edit(item: string) {
    this.itemBeingEdited = item;
  }
  save(item: string) {
    this.equipment[this.equipment.indexOf(this.itemBeingEdited)] = item;
    this.itemBeingEdited = null;
  }


}
