import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  /* assignments: Assignment[] = [
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
   ];*/
  assignments = new BehaviorSubject<Assignment[]>([
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
  ]);

  constructor() { }

  //getAssignments(): Observable<Assignment[]> {
  //return of(this.assignments);
  // }

  addAssignment(assignment: Assignment) {
    const assignments = this.assignments.getValue()
    assignments.push(assignment);
    this.assignments.next(assignments);
    console.log("add assignments");

  }
  updateAssignment(nom: string) {
    const assignments = this.assignments.getValue();
    const index = assignments.findIndex(elt => elt.nom === nom);
    console.log(index);
    assignments[index].rendu = true;
    this.assignments.next(assignments);
    console.log("update one assignment")
    //return of("Assignment service: assignment modifié")
  }

  deleteAssignment(assignment: Assignment) {
    const assignments = this.assignments.getValue();
    const index = assignments.findIndex(elt => elt.nom === assignment.nom);
    //console.log(index);
    assignments.splice(index, 1);
    this.assignments.next(assignments);
    console.log("delete one assignment")
    //return of("Assignment service: Assignment supprimé");

  }

}
