import { Component, OnInit } from '@angular/core';

import { reduce, Subscription } from 'rxjs';
import { Assignment } from './assignment.model';
import { AssignmentsService } from '../shared/assignments.service';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
  //title = 'Liste des devoirs BUT 3 - RA !!!';
  //form

  assignmentSelectionne: Assignment | null = null;
  formVisible!: boolean;
  assignments!: Assignment[];

  subscriptions: Subscription[] = [];

  constructor(private assignmentService: AssignmentsService) {

  }
  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  ngOnInit() {

    //this.assignments = this.assignmentService.getAssignments();
    //this.getAssignments();
    let subscription = this.assignmentService.assignments.subscribe(
      (assignments) => (this.assignments = assignments)
    );
    this.subscriptions.push(subscription);
    subscription = this.assignmentService.FormVisible.subscribe(
      (formVisible) => (this.formVisible = formVisible)
    );
    this.subscriptions.push(subscription);

    subscription = this.assignmentService.selectedAssignment.subscribe(
      (assignmentSelectionne) => (this.assignmentSelectionne = assignmentSelectionne)
    );
    this.subscriptions.push(subscription);


  }



  onAssignementClick(assignment: Assignment) {
    console.log(assignment);
    this.assignmentService.selectedAssignment.next(assignment);
  }




}
