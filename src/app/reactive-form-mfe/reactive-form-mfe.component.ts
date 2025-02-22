import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { fromEvent } from 'rxjs';

interface MFE2Data {
  msg: string
}

@Component({
  selector: 'app-reactive-form-mfe',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reactive-form-mfe.component.html',
  styleUrl: './reactive-form-mfe.component.scss'
})
export class ReactiveFormMfeComponent {
  form: FormGroup;
  mfe2Data = toSignal(fromEvent<CustomEvent<MFE2Data>>(window, 'mfe2:data'), {
    initialValue : new CustomEvent<MFE2Data>('mfe2:data', { detail : { msg : ''}})
  });

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name:[''],
      email:['']
    });
  }

  onSubmit(): void {
    dispatchEvent(new CustomEvent('mfe1:reactiveFormData', { detail: this.form.value }));
  }

}
