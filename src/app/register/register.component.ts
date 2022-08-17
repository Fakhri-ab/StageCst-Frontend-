import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import {UserAuthService} from '../../shared/services/user-auth.service';
import {Router} from '@angular/router';
import {MyToastrService} from '../../shared/services/my-toastr.service';

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
              private router: Router,
              private toastr: MyToastrService) { }

  ngOnInit(): void {
  }

  submit() {

    if (this.SignUpForm.valid) {
      this.userService.SignUp(this.SignUpForm.value).subscribe((res => this.router.navigateByUrl('/login')));
      this.toastr.showNotification('top', 'right', 2, 'User ', ' Compte creé',
      console.log(this.SignUpForm.value));
    } else {
      this.toastr.showNotification('top', 'right', 3, 'erreur:', 'verifier vos champs', '.......')
    }

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
