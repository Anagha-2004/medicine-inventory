import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { MedicineListComponent } from './medicine-list/medicine-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MedicineListComponent],
  template: `<app-medicine-list></app-medicine-list>`,
})
export class AppComponent {}

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()]
});
