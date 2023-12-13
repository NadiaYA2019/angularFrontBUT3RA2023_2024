import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/services/assignments.service';
import { Assignment } from '../../shared/models/assignment.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css'],
})
export class EditAssignmentComponent {
  nomAssignment!: string;
  dateDeRendu!: Date;
  selectedAssignment: Assignment = new Assignment();
  subscriptions: Subscription[] = [];

  constructor(
    private assignmentService: AssignmentsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(id);
    this.assignmentService.selectAssignment(id);
    let subscription = this.assignmentService.selectedAssignment.subscribe(
      (selectedAssignment) => {
        if (selectedAssignment) {
          this.selectedAssignment = selectedAssignment;
        }
      }
    );
    this.subscriptions.push(subscription);
  }

  onSaveAssignment() {
    if (this.selectedAssignment.nom || this.selectedAssignment.dateDeRendu) {
      this.assignmentService.editAssignement();
    }
  }
}
