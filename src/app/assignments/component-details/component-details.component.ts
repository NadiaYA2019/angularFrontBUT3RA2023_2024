import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';

@Component({
  selector: 'app-component-details',
  templateUrl: './component-details.component.html',
  styleUrls: ['./component-details.component.css']
})
export class ComponentDetailsComponent implements OnChanges {

  @Input()
  assignementTransmis!: Assignment | undefined;

  // @Output()
  //assignmentRendu = new EventEmitter<string>;

  //@Output()
  //deleteAssignment = new EventEmitter();

  constructor(private assignmentService: AssignmentsService) { }

  onAssignmentRendu() {
    //this.assignmentRendu.emit(this.assignementTransmis.nom);
    if (this.assignementTransmis) {
      this.assignmentService.updateAssignment(this.assignementTransmis.nom)
        .subscribe(message => console.log(message));
    }
    //this.assignementTransmis.rendu = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  onDeleteAssignment() {

    if (!this.assignementTransmis) return;
    this.assignmentService.deleteAssignment(this.assignementTransmis)
      .subscribe(message => {
        console.log(message);
        this.assignementTransmis = undefined;
      }
      );
    // this.deleteAssignment.emit(this.assignementTransmis.nom);


    //this.assignementTransmis = null;
  }

}
