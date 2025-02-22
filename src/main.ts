import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ApplicationRef } from '@angular/core';
import { ReactiveFormMfeComponent } from './app/reactive-form-mfe/reactive-form-mfe.component';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

(async () => {
  const appRef: ApplicationRef = await createApplication(appConfig);

  const ReactiveFormElement = createCustomElement(ReactiveFormMfeComponent, {
    injector: appRef.injector,
  });

  customElements.define('mfe1-reactive-form', ReactiveFormElement);
  // appRef.bootstrap(AppComponent);  // comment this line when creating the build
  console.log('MFE1 bootstrapped and custom element registered');

})().catch((err) => console.error('Error bootstrapping MFE1:', err));
