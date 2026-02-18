import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
   isLoading = false;
   errorMessage = '';


  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  
  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });


onSubmit(): void {
  this.errorMessage = '';

  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }

  this.isLoading = true;

  const { username, password } = this.form.getRawValue() as { username: string; password: string };

  this.auth.login(username, password).subscribe({
    next: (res) => {
      this.isLoading = false;
      console.log('Login başarılı:', res);
      localStorage.setItem('token', res.token);
    },
    error: (err) => {
      this.isLoading = false;
      this.errorMessage = err?.error?.message ?? 'Login başarısız';
    },
  });
}

}
