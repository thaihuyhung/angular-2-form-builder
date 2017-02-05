import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {FormGroup, FormBuilder, FormArray} from "@angular/forms";

@Component({
  selector: 'generated-form',
  templateUrl: './generated-form.component.html',
  styleUrls: ['./generated-form.component.scss']
})
export class GeneratedFormComponent implements OnInit {
  @Input() containerForm: FormGroup;
  @Output() onGoBack = new EventEmitter();

  generatedForm: FormGroup;
  sectionControl: FormArray;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.generatedForm = this._fb.group({
      sections: this._fb.array([])
    });
    this.sectionControl = <FormArray>this.generatedForm.controls['sections'];

    console.log("GO Here");
  }

  onBack(){
    this.onGoBack.emit();
  }

}
