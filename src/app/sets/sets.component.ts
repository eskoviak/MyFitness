import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Exercise } from '../models';
import { EXERCISES } from '../mock-exercises';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.scss']
})

export class SetsComponent {
  exercises = EXERCISES
  workout_date = (new Date()).toUTCString();
  edit_flag = true;
  prev_cadence = ''
  prev_weights = ''
  prev_weight_unit = ''



  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {}

  setsForm = this.fb.group(
    {
      exercise: [''],
      cadence: [this.prev_cadence, Validators.required],
      weights: [this.prev_weights],
      weight_unit: [this.prev_weight_unit],
      notes: [''],
    }
  )

  get cadence() {return this.setsForm.get('cadence')}

  ngOnInit() {
  //this.route.queryParams.subscribe(params => {
  //    this.id = Number(params['id']);
  //  });
    //this.id = Number(this.route.snapshot.paramMap.get('id'));
    //if (this.id == 0) {
    //  this.edit_flag = false
    //} else {
    //  this.edit_flag = true
   // }
    //this.setsForm.controls.date.setValue((new Date().toUTCString()))
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // TODO:  Call api to enter data; get data back from db and display in edit mode
    //console.log('In onSubmit')
    //this.edit_flag = true;
    this.setsForm.controls.cadence.setValue(String(this.formatCadence()))
  }
  
  formatCadence() {
    var cadence = String(this.setsForm.get('cadence'))
    const Xre = RegExp('x')
    var is_x_pattern = Xre.test(cadence)
    return is_x_pattern
  }
  
  onUpdate() {
    console.log('In onUpdate');
    // TODO Add update logic
    this.onNewSet();
  }

  onNewSet() {
    this.setsForm.controls.exercise.setValue('');
    this.setsForm.controls.weights.setValue(this.prev_weights);
    this.setsForm.controls.weight_unit.setValue(this.prev_weight_unit)
    this.setsForm.controls.cadence.setValue(this.prev_cadence);
    this.edit_flag = false;
  }

  exerciseTrackBy(index : number, exercise : Exercise){
    return exercise.id;
  }
}
