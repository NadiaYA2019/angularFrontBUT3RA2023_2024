import { Component, OnInit } from '@angular/core';

import { reduce } from 'rxjs';
import { Assignment } from './assignment.model';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
  title = 'Liste des devoirs BUT 3 - RA !!!';
  //form
  
  assignmentSelectionne !: Assignment;
  formVisible = false;

  ajoutActive = false;
  ngOnInit() {
    setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);
  }
  getAssignmentTitle() {
    return this.title;
  }

  assignments: Assignment[] = [
    {
      nom: 'TP1 intro: TypeScript',
      dateDeRendu: new Date('2023-09-27'),
      rendu: true,
    },
    {
      nom: 'TP2 Angular : un joli gestionnaire de devoirs',
      dateDeRendu: new Date('2023-11-03'),
      rendu: false,
    },
    {
      nom: 'TP3 Angular, utilisation de router et de Web services',
      dateDeRendu: new Date('2023-12-22'),
      rendu: false,
    },
  ];

  onAssignementClick(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
  }
  onAddAssignmentBtnClick() {
    this.formVisible =true;
  }
  onNouvelAssignment(event:Assignment)
  {
    this.assignments.push(event); 
    this.formVisible = false; // revoir la liste
  }
}
