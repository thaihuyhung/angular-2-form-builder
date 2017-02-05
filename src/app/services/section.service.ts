import {Injectable} from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormArray} from "@angular/forms";
import {FieldTypeEnum} from "../enum/fieldType.enum";

@Injectable()
export class SectionService {
  containerForm: FormGroup;
  sectionControl: FormArray;

  constructor(private _fb: FormBuilder) {
    this.containerForm = this._fb.group({
      sections: this._fb.array([])
    });
    this.sectionControl = <FormArray>this.containerForm.controls['sections'];
  }

  addNewSection(_name?: string, _isMainSection?: boolean){
    this.sectionControl.push(this.initSection(_name, _isMainSection));
  }

  removeSection(index: number){
    this.sectionControl.removeAt(index);
  }

  addNewInput(sectionControl){
    const section = <FormArray>sectionControl.controls['inputs'];
    section.push(this.initInput());
  }

  removeInput(sectionControl, index){
    sectionControl.removeAt(index);
  }

  addNewOption(inputControl){
    const input = <FormArray>inputControl.controls['options'];
    input.push(this.initOption());
  }

  removeOption(inputControl, index){
    inputControl.removeAt(index);
  }

  private initSection(_name?: string, _isMainSection?: boolean){
    return this._fb.group({
      name: [_name, Validators.required],
      description: ['', Validators.required],
      inputs: this._fb.array([]),
      isMainSection: _isMainSection
    });
  }

  private initInput(){
    return this._fb.group({
      fieldName: ['', Validators.required],
      fieldType: [FieldTypeEnum.TextBox, Validators.required],
      isRequired: [false, Validators.required],
      options: this._fb.array([])
    });
  }

  private initOption(){
    return this._fb.group({
      optionName: ['', Validators.required],
      targetSection: [null]
    });
  }
}
