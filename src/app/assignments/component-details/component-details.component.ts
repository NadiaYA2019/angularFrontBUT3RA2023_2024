import { Component, Input } from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-component-details',
  templateUrl: './component-details.component.html',
  styleUrls: ['./component-details.component.css']
})
export class ComponentDetailsComponent {
  @Input()
  assignementTransmis!: Assignment; 
  
  onAssignmentRendu()
  {
    this.assignementTransmis.rendu = true;
  }
}
