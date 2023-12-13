import { Routes } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AddAssignementComponent } from './assignments/add-assignement/add-assignement.component';
import { ComponentDetailsComponent } from './assignments/component-details/component-details.component';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { authGuard } from './shared/guards/auth.guard';
import { TestFormComponent } from './assignments/test-form/test-form.component';

export const routes: Routes = [
  //home page
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AssignmentsComponent },
  { path: 'add', component: AddAssignementComponent },
  { path: 'assignement/:id', component: ComponentDetailsComponent },
  { path: 'test', component: TestFormComponent },
  {
    path: 'assignement/:id/edit',
    component: EditAssignmentComponent,
    canActivate: [authGuard],
  },
];
