import { Component, OnInit } from '@angular/core';

import { reduce } from 'rxjs';
import { Assignment } from './assignment.model';
import { AssignmentsService } from '../shared/assignments.service';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
  title = 'Liste des devoirs BUT 3 - RA !!!';
  //form

  assignmentSelectionne !: Assignment | null;
  formVisible = false;
  assignments!: Assignment[];

  constructor(private assignmentService: AssignmentsService) {

  }


  ngOnInit() {

    //this.assignments = this.assignmentService.getAssignments();
    this.getAssignments();

  }

  getAssignments() {
    this.assignmentService.getAssignments().
      subscribe(assignments => this.assignments = assignments);
  }

  onAssignementClick(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
  }
  onAddAssignmentBtnClick() {
    this.formVisible = true;
  }
  onNouvelAssignment() {
    //this.assignments.push(event); 

    this.formVisible = false; // revoir la liste
  }
  onAssignmentRendu(nom: string) {

    // this.assignmentService.updateAssignment(nom)
    // .subscribe(message => console.log(message));
    //const index = this.assignments.findIndex(elt => elt.nom === nom);
    //console.log(index);
    //this.assignments[index].rendu = true;
  }
  onDeleteAssignment(nom: string) {
    // this.assignmentService.deleteAssignment(nom)
    // .subscribe(message => console.log(message));
    //this.assignmentSelectionne = null;
  }

}
