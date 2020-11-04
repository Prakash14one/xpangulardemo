import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from './_helpers/must-match.validator';

@Component({
  selector: 'xb-consumer-enrollments',
  templateUrl: './consumer-enrollments.component.html',
  styleUrls: ['./consumer-enrollments.component.scss']
})
export class ConsumerEnrollmentsComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.required, Validators.maxLength(10)]],
      question: ['demo 1', Validators.required],
      answer: ['', Validators.required],
      terms: ['true'],
      password: ['', [Validators.required, Validators.minLength(5),
      Validators.pattern('')
      ]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword'),
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    console.log('form value is', this.registerForm.value);


    ///api work

  }
}
