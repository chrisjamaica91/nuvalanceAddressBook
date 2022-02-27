import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  formData: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  get fData() {
    return this.formData.controls;
  }

  submitLogin(data: any) {
    this.userName = data.userName;
    this.password = data.password;

    this.authService.login(this.userName, this.password).subscribe(res => {
      if (res) {
        this.router.navigate(['/addressBook']);
      } else {
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Invalid Login Credentials', life: 3000});
      }
    })
  }
}
