import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

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

  constructor() { }

  getAssignments():Observable<Assignment[]>
  {
    return of(this.assignments);
  }

  addAssignment(assignment:Assignment): Observable<string>{
    this.assignments.push(assignment);
    return of('Assignment service: Assignment Ajouté');

  }
  updateAssignment(nom: string):Observable<string>{
    const index = this.assignments.findIndex(elt => elt.nom === nom);
    console.log(index);
    this.assignments[index].rendu = true;
    return of("Assignment service: assignment modifié") 
  }

  deleteAssignment(nom: string): Observable<string>{
    const index = this.assignments.findIndex(elt => elt.nom === nom);
    //console.log(index);
    this.assignments.splice(index,1);
    return of("Assignment service: Assignment supprimé");
    
  }
  
}
