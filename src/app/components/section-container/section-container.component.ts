import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {SectionService} from "../../services/section.service";
import {FormGroup, FormArray} from "@angular/forms";

@Component({
  selector: 'section-container',
  templateUrl: 'section-container.component.html',
  styleUrls: ['section-container.component.scss']
})
export class SectionContainerComponent implements OnInit {
  containerForm: FormGroup;
  @Output() onSubmitted = new EventEmitter();

  constructor(private _sectionService: SectionService) {
    this.containerForm = _sectionService.containerForm;
  }

  ngOnInit() {
    if (!(<FormArray>this.containerForm.controls['sections']).length ){
      this._sectionService.addNewSection("Main Section", true);
    }
  }

  onSubmit(){
    this.onSubmitted.emit(this.containerForm);
  }

}
