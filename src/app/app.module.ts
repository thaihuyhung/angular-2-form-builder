import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppComponent } from './app.component';
import { FormSectionComponent } from './components/form-section/form-section.component';
import { SectionManagementComponent } from './components/section-management/section-management.component';
import { SectionContainerComponent } from './components/section-container/section-container.component';
import { SectionService } from "./services/section.service";
import { GeneratedFormComponent } from './components/generated-form/generated-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormSectionComponent,
    SectionManagementComponent,
    SectionContainerComponent,
    GeneratedFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [SectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
