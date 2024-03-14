import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-field-password',
  templateUrl: './form-field-password.component.html'
})
export class FormFieldPasswordComponent {
  showPassword = false;

  @Output() private changedPasswordEvent = new EventEmitter<string>();

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  changePassword(password: string) {
    this.changedPasswordEvent.emit(password);
  }
}
