import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { In } from 'src/app/models/in.model';
import { googleFormService } from 'src/app/services/google-form.service';
import { OtpService } from 'src/app/services/otp.service';

@Component({
  selector: 'app-in',
  templateUrl: './in.component.html',
  styleUrls: ['./in.component.scss']
})
export class InComponent {

  constructor(public ser: googleFormService) {
  }

  FormSubmit(value: string): void {
    this.ser.Save(1, value);
  }
}
