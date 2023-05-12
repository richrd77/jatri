import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-j-form',
  templateUrl: './j-form.component.html',
  styleUrls: ['./j-form.component.scss']
})
export class JFormComponent {

  @Input() public Header: string;
  @Input() public InProgress: boolean | null;
  @Output() public FormSubmitEvent: EventEmitter<string>;

  public fg: FormGroup;

  constructor(private fb: FormBuilder) {
    this.Header = '';
    this.InProgress = false;
    this.FormSubmitEvent = new EventEmitter<string>();
    this.fg = fb.group({
      number: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')])
    });
  }

  Submit(): void {
    if (this.fg.valid) {
      this.FormSubmitEvent.emit(this.fg.value.number);
    }
  }
}
