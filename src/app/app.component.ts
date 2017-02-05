import {Component} from '@angular/core';
import {SectionService} from "./services/section.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  containerForm: FormGroup;
  isSubmitted: boolean = false;

  handleSubmitted(containerForm){
    this.containerForm = containerForm;
    this.isSubmitted = true;
  }

  handleGoBack(){
    this.isSubmitted = false;
  }
}
