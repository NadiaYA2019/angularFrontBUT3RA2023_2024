import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {


  assignments = new BehaviorSubject<Assignment[]>([
    {
      id: 1,
      nom: 'TP1 intro: TypeScript',
      dateDeRendu: new Date('2023-09-27'),
      rendu: true,
    },
    {
      id: 2,
      nom: 'TP2 Angular : un joli gestionnaire de devoirs',
      dateDeRendu: new Date('2023-11-03'),
      rendu: false,
    },
    {
      id: 3,
      nom: 'TP3 Angular, utilisation de router et de Web services',
      dateDeRendu: new Date('2023-12-22'),
      rendu: false,
    },
  ]);
  private _formVisible = new BehaviorSubject<boolean>(false);
  FormVisible = this._formVisible.asObservable();

  updateFormVisible(valeur: boolean) {
    this._formVisible.next(valeur);
  }

  selectedAssignment = new BehaviorSubject<Assignment | null>(null);


  constructor(private router: Router) { }

  addAssignment(assignment: Assignment): void {
    const assignments = this.assignments.getValue()
    assignments.push(assignment);
    this.assignments.next(assignments);
    console.log("add assignments");
    //this._formVisible.next(false);
    this.router.navigate(['home']);

  }

  updateAssignment() {

    const selectedAssignment = this.selectedAssignment.getValue();

    if (selectedAssignment) {

      selectedAssignment.rendu = true;

      console.log("update one assignment");
    }

  }
  editAssignement(assignement: Assignment) {
    const assignments = this.assignments.getValue();
    const index = assignments.findIndex(elt => elt.id === assignement.id);
    assignments[index].nom = assignement.nom;
    assignments[index].dateDeRendu = assignement.dateDeRendu;
    this.assignments.next(assignments);
  }

  deleteAssignment() {
    const selectedAssignment = this.selectedAssignment.getValue();
    const assignments = this.assignments.getValue();
    if (selectedAssignment) {
      const index = assignments.findIndex(elt => elt.nom === selectedAssignment.nom);
      //console.log(index);
      assignments.splice(index, 1);
      this.assignments.next(assignments);
      console.log("delete one assignment");
      this.selectedAssignment.next(null);
    }


  }

  selectAssignment(id: number) {
    const assignments = this.assignments.getValue();
    const assignment = assignments.find((assignment) => assignment.id === id);
    if (assignment) {
      this.selectedAssignment.next(assignment);
    } else {
      this.selectedAssignment.next(null);
      console.log('No assignment found with id ' + id);
    }
  }

}
