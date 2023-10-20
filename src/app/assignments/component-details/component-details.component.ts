import { Component, EventEmitter, Output,Input, OnChanges, SimpleChanges } from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-component-details',
  templateUrl: './component-details.component.html',
  styleUrls: ['./component-details.component.css']
})
export class ComponentDetailsComponent implements OnChanges{
 
  @Input()
  assignementTransmis!: Assignment; 
  
  @Output()
  assignmentRendu = new EventEmitter<string>;
  
  @Output()
  deleteAssignment = new EventEmitter();

  
  onAssignmentRendu()
  {
    this.assignmentRendu.emit(this.assignementTransmis.nom);

    //this.assignementTransmis.rendu = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  onDeleteAssignment()
  {
    this.deleteAssignment.emit(this.assignementTransmis.nom);

  }
  
}
