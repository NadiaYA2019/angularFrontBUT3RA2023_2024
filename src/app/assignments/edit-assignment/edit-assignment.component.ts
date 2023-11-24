import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent {
  nomAssignment !: string;
  dateDeRendu !: Date;

  constructor(
    private assignmentService: AssignmentsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

  }
  selectedAssignment: Assignment | null = null;
  subscriptions: Subscription[] = [];
  ngOnInit() {

    const id = parseInt(this.activatedRoute.snapshot.params['id'], 10);
    console.log(id);

    this.assignmentService.selectAssignment(id);

    let subscription = this.assignmentService.selectedAssignment.subscribe(
      (selectedAssignment) => (this.selectedAssignment = selectedAssignment)
    );


  }

  onSaveAssignment() {
    if (this.selectedAssignment) {
      const a = new Assignment();
      a.id = this.selectedAssignment.id;
      a.nom = this.nomAssignment;
      a.dateDeRendu = this.dateDeRendu;
      console.log(a);
      this.assignmentService.selectedAssignment.next(a);
      this.assignmentService.editAssignement(a);
      // navigation vers la home page
      this.router.navigate(['/home']);

    }

  }


}
