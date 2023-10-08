import { Component, EventEmitter, Output } from '@angular/core';
import { Assignment } from '../assignment.model';


@Component({
  selector: 'app-add-assignement',
  templateUrl: './add-assignement.component.html',
  styleUrls: ['./add-assignement.component.css']
})
export class AddAssignementComponent {
  nomDevoir = '';
  dateDeRendu!: Date;
  @Output() nouvelAssignment = new EventEmitter<Assignment>();
  onSubmit() {
    console.log(this.nomDevoir);
    console.log(this.dateDeRendu); 
    if (this.nomDevoir === "") return; 
    if (this.dateDeRendu === undefined) return; 
    let newAssigment = new Assignment();
    newAssigment.nom = this.nomDevoir;
    newAssigment.dateDeRendu = this.dateDeRendu;
    newAssigment.rendu = false;
    this.nouvelAssignment.emit(newAssigment);
  }
}
