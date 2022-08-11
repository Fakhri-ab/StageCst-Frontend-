import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import {UserAuthService} from '../../shared/services/user-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  focus;
  focus1;

  @Input()
  public alerts: Array<IAlert> = [];
  private backup: Array<IAlert>;

  SignUpForm = new FormGroup({
    userName: new FormControl(''),
    userFirstName: new FormControl(''),
    userLastName: new FormControl(''),
    userEmail: new FormControl(''),
    userPassword: new FormControl(''),


  });
  constructor(private userService: UserService,
              private userAuthService: UserAuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  submit() {

    // formData.append('nomcat', this.prodFile);
    this.userService.SignUp(this.SignUpForm.value).subscribe((res => this.router.navigateByUrl('/login')));
    console.log(this.SignUpForm.value);
    this.alerts.push({
      id: 1,
      type: 'success',
      strong: 'Well done!',
      message: 'You successfully created your account.',
      icon: 'ui-2_like'
    })
  }

  GoToSignIn() {
    this.router.navigate(['login'])
  }

  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
}

export interface IAlert {
  id: number;
  type: string;
  strong?: string;
  message: string;
  icon?: string;
}
