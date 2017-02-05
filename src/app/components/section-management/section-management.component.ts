import { Component, OnInit } from '@angular/core';
import {SectionService} from "../../services/section.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'section-management',
  templateUrl: 'section-management.component.html',
  styleUrls: ['section-management.component.scss']
})
export class SectionManagementComponent implements OnInit {

  containerForm: FormGroup;

  newSectionValue: string;
  constructor(private _sectionService: SectionService) {
    this.containerForm = _sectionService.containerForm;
  }

  ngOnInit() {

  }

  onAddNewSection(){
    // Hello
    this._sectionService.addNewSection(this.newSectionValue, false);
    this.newSectionValue = "";
  }
}
