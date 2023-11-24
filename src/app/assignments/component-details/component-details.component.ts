import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-component-details',
  templateUrl: './component-details.component.html',
  styleUrls: ['./component-details.component.css']
})
export class ComponentDetailsComponent implements OnInit {

  constructor(
    private assignmentService: AssignmentsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

  }
  selectedAssignment: Assignment | null = null;
  subscriptions: Subscription[] = [];
  ngOnInit() {

    //const id = parseInt(this.activatedRoute.snapshot.params['id'], 10);
    this.activatedRoute.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.assignmentService.selectAssignment(id);

    });



    let subscription = this.assignmentService.selectedAssignment.subscribe(
      (selectedAssignment) => (this.selectedAssignment = selectedAssignment)
    );
    this.subscriptions.push(subscription);
  }




  onAssignmentRendu() {

    if (this.selectedAssignment) {
      this.assignmentService.updateAssignment();
      this.router.navigate(["/home"]);

    }

  }



  onDeleteAssignment() {

    if (!this.selectedAssignment) return;
    this.assignmentService.deleteAssignment();
    this.router.navigate(["/home"]);


  }

}
