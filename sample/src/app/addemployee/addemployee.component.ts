import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css'],
})
export class AddemployeeComponent {
  @Input() item: string | undefined;

  successmsg: boolean = false;
  dummy: any;

  register = new FormGroup({
    empname: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(16),
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
    empsalary: new FormControl('', [
      Validators.required,
      Validators.min(1000),
      Validators.max(99999999),
    ]),
    empage: new FormControl('', [
      Validators.required,
      Validators.min(18),
      Validators.max(99),
    ]),
  });

  SubmitForm() {
    if (this.register.valid) {
      this.successmsg = true;
      setTimeout(() => {
        this.register.reset();
        this.successmsg = false;
      }, 1000);
    } else {
      this.register.get('empname')?.markAsTouched();
      this.register.get('empage')?.markAsTouched();
      this.register.get('empsalary')?.markAsTouched();
    }
  }
}
