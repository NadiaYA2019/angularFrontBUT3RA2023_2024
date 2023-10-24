import { Component, EventEmitter, Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';


@Component({
  selector: 'app-add-assignement',
  templateUrl: './add-assignement.component.html',
  styleUrls: ['./add-assignement.component.css']
})
export class AddAssignementComponent {
  nomDevoir = '';
  dateDeRendu!: Date;
  constructor(private assignmentService: AssignmentsService) { }

  @Output() nouvelAssignment = new EventEmitter();
  onSubmit() {
    console.log(this.nomDevoir);
    console.log(this.dateDeRendu);
    if (this.nomDevoir === "") return;
    if (this.dateDeRendu === undefined) return;
    let newAssigment = new Assignment();
    newAssigment.nom = this.nomDevoir;
    newAssigment.dateDeRendu = this.dateDeRendu;
    newAssigment.rendu = false;
    this.assignmentService.addAssignment(newAssigment);
    this.nouvelAssignment.emit();
  }
}
