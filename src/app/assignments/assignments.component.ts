import { Component, OnInit } from '@angular/core';

import { reduce, Subscription } from 'rxjs';
import { Assignment } from '../shared/models/assignment.model';
import { AssignmentsService } from '../shared/services/assignments.service';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
  assignments: Assignment[] = [];
  isLoading = false;
  subscriptions: Subscription[] = [];

  constructor(private assignmentService: AssignmentsService) { }
  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.assignmentService.getAssignments();

    let subscription = this.assignmentService.assignments.subscribe(
      (assignments) => (this.assignments = assignments)
    );
    this.subscriptions.push(subscription);

    subscription = this.assignmentService.isLoading.subscribe(
      (isLoading) => (this.isLoading = isLoading)
    );
    this.subscriptions.push(subscription);
  }

  onAssignementClick(assignment: Assignment) {
    console.log(assignment);
    this.assignmentService.selectedAssignment.next(assignment);
  }
}
