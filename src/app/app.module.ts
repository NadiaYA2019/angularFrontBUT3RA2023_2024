import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDividerModule} from '@angular/material/divider';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { AssignmentsComponent } from './assignments/assignments.component';
import { FormsModule } from '@angular/forms';
import { RenduDirective } from './shared/rendu.directive';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ComponentDetailsComponent } from './assignments/component-details/component-details.component';
import { AddAssignementComponent } from './assignments/add-assignement/add-assignement.component';


@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    RenduDirective,
    ComponentDetailsComponent,
    AddAssignementComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule, 
    MatInputModule,
    MatFormFieldModule, 
    MatNativeDateModule,
    MatDatepickerModule,
    MatListModule, MatDividerModule, MatCardModule, MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
