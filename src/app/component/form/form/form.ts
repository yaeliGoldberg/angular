import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  date = '';
  name = '';
  address = '';
  city = '';
  phone = '';
  reason = '';
  invoice = '';
  description = '';

  send() {
    console.log('הטופס נשלח');
  }
}
