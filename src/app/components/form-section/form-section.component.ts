import {Component, OnInit, Input} from '@angular/core';
import {FieldTypeEnum} from "../../enum/fieldType.enum";
import {SectionService} from "../../services/section.service";
import {FormGroup, FormArray} from "@angular/forms";

@Component({
  selector: 'form-section',
  templateUrl: 'form-section.component.html',
  styleUrls: ['form-section.component.scss']
})
export class FormSectionComponent implements OnInit {

  @Input() sectionForm: FormGroup;
  @Input() sectionIndex: number;

  fieldTypes = FieldTypeEnum;
  fieldTypeKeys: any[];
  sectionList: any[];

  constructor(private _sectionService: SectionService) {
  }

  ngOnInit() {
    this.fieldTypeKeys = Object.keys(this.fieldTypes).filter(Number).map(Number);
  }

  onRemoveSection() {
    this._sectionService.removeSection(this.sectionIndex);
  }

  onAddNewInput() {
    this._sectionService.addNewInput(this.sectionForm);
  }

  onRemoveInput(index) {
    this._sectionService.removeInput(this.sectionForm, index);
  }

  onAddNewOption(inputControl) {
    this._sectionService.addNewOption(inputControl);
  }

  onRemoveOption(inputControl, index){
    this._sectionService.removeOption(inputControl, index);
  }

  hasSubPanel(fieldType){
    return fieldType == FieldTypeEnum.Dropdown;
  }

  onOpenSelect() {
    this.sectionList = (<FormArray>this._sectionService.containerForm.controls["sections"]).controls.filter((x, i) => i > 0);
  }

}
