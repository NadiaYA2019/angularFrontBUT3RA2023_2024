import {
  Component,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';


@Component({
  selector: 'app-component-details',
  templateUrl: './component-details.component.html',
  styleUrls: ['./component-details.component.css'],
})
export class ComponentDetailsComponent implements OnInit {
  constructor(
    private assignmentService: AssignmentsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  selectedAssignment: Assignment | null = null;
  subscriptions: Subscription[] = [];
  ngOnInit() {
    //const id = parseInt(this.activatedRoute.snapshot.params['id'], 10);
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id){
        this.assignmentService.selectAssignment(Number(id));
      }
    });

    let subscription = this.assignmentService.selectedAssignment.subscribe(
      (selectedAssignment: any) => (this.selectedAssignment = selectedAssignment)
    );
    this.subscriptions.push(subscription);
  }

  onAssignmentRendu() {
    if (this.selectedAssignment) {
      this.assignmentService.updateAssignment();
    }
  }

  onDeleteAssignment() {
    if (!this.selectedAssignment) return;
    this.assignmentService.deleteAssignment();
  }
}
