import { Injectable } from '@angular/core';
import { Assignment } from '../models/assignment.model';
import { Observable, of, BehaviorSubject, catchError, map } from 'rxjs';
import { Router } from '@angular/router';
import { HttpService } from './http.service';

@Injectable({ "providedIn": 'root' })
export class AssignmentsService {
  assignments = new BehaviorSubject<Assignment[]>([]);

  selectedAssignment = new BehaviorSubject<Assignment | null>(null);

  constructor(private router: Router, private http: HttpService) { }



  isLoading = new BehaviorSubject<boolean>(false);

  getAssignments(): void {
    this.isLoading.next(true);
    this.http
      .getAssignments()
      .pipe(
        map((data: Assignment[]) => {
          return data.map((element) => {
            element.dateDeRendu = new Date(element.dateDeRendu);
            element.nom = "Intitulé du devoir: " + element.nom;
            return element;
          });
        }),
        catchError((error) => {
          this.isLoading.next(false);
          throw new Error(error);
        })
      )
      .subscribe((data: Assignment[]) => {
        console.log(data);
        this.assignments.next(data);
        this.isLoading.next(false);
      });
  }
  /*
    selectAssignment(id: string) {
      this.isLoading.next(true);
      const sub = this.http
        .getAssignment(id)
        .pipe(
          map((element: Assignment) => {
            element.dateDeRendu = new Date(element.dateDeRendu);
            return element;
          }),
          catchError((error) => {
            this.selectedAssignment.next(null);
            this.isLoading.next(false);
            this.router.navigate(['/home']);
            console.log('No assignment found with id ' + id);
            sub.unsubscribe();
            throw new Error(error);
          })
        )
        .subscribe((data) => {
          this.isLoading.next(false);
          this.selectedAssignment.next(data);
          sub.unsubscribe();
        });
    }*/


  selectAssignment(id: number) {
    this.isLoading.next(true);
    const sub = this.http
      .getAssignment(id)
      .subscribe((data) => {
        this.isLoading.next(false);
        this.selectedAssignment.next(data);
        sub.unsubscribe();
      });
  }

  addAssignment(assignment: Assignment): void {
    const sub = this.http.addAssignment(assignment).subscribe((data) => {
      console.log(data);
      console.log('add assignments');
      this.router.navigate(['home']);
      sub.unsubscribe;
    });
  }

  updateAssignment() {
    const selectedAssignment = this.selectedAssignment.getValue();
    if (selectedAssignment) {
      selectedAssignment.rendu = true;
      console.log('update one assignment');
      this.editAssignement();
    }
  }

  editAssignement() {
    const selectedAssignment = this.selectedAssignment.getValue();
    if (selectedAssignment) {
      const sub = this.http
        .putAssignment(selectedAssignment.id, selectedAssignment)
        .subscribe(() => {
          console.log('edit one assignment');
          this.router.navigate(['/home']);
          this.selectedAssignment.next(null);
          sub.unsubscribe();
        });
    }
  }

  deleteAssignment() {
    const selectedAssignment = this.selectedAssignment.getValue();
    if (selectedAssignment) {
      const sub = this.http
        .deleteAssignment(selectedAssignment.id)
        .subscribe(() => {
          console.log('delete one assignment');
          this.selectedAssignment.next(null);
          this.router.navigate(['/home']);
          sub.unsubscribe();
        });
    }
  }


}