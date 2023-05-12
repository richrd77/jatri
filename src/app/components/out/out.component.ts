import { Component } from '@angular/core';
import { googleFormService } from 'src/app/services/google-form.service';

@Component({
  selector: 'app-out',
  templateUrl: './out.component.html',
  styleUrls: ['./out.component.scss']
})
export class OutComponent {
  
  constructor(public ser: googleFormService) { }

  Checkout(value: string): void {
    this.ser.Save(2, value);
  }
}
