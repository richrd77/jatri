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

  otoBtn = 'Send Otp';
  fgroup: FormGroup;
  isOtpVerified: boolean = false;
  isOtpgenerated: boolean = false;

  @ViewChild('otp') otpInput: ElementRef<HTMLInputElement> | null;

  constructor(private builder: FormBuilder, private otpService: OtpService,
    private form: googleFormService) {
    this.otpInput = null;
    this.isOtpgenerated = false;
    this.fgroup = this.builder.group({
      name: ['', [Validators.required]],
      gadi: ['', [Validators.required]],
      number: ['', [Validators.required]],
      inTime: [''],
    });
  }

  FormSubmit(): void {
    alert(this.fgroup.status);
    if (this.fgroup.valid) {
      this.form.CheckIn(new In(this.fgroup.getRawValue()));
    }
  }

  SendOtp(): void {
    if (this.fgroup.valid) {
      if (!this.isOtpgenerated) {
        this.otpService.generateOtp();
        this.otoBtn = 'Verify Otp';
        this.isOtpgenerated = true;
      } else if (!this.isOtpVerified && this.isOtpgenerated && this.otpInput?.nativeElement.value) {
        this.isOtpVerified = this.otpService.verifyOtp(this.otpInput.nativeElement.value);
      }
    }
  }

  ResetForm(): void {
    this.fgroup.reset();
    this.isOtpVerified = false;
    this.isOtpgenerated = false;
    this.otoBtn = 'Send Otp';
  }

}
