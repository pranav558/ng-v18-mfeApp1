import { Component } from '@angular/core';
import { ReactiveFormMfeComponent } from './reactive-form-mfe/reactive-form-mfe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormMfeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-v18-mfeApp1';
}
