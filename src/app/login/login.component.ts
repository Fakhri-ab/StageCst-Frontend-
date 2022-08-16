import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {UserService} from '../../shared/services/user.service';
import {UserAuthService} from '../../shared/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loading = false
    loginForm = new FormGroup({
        email: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
    })

    data: Date = new Date();
    focus;
    focus1;



    constructor(      private userService: UserService,
                      private userAuthService: UserAuthService,
                      private router: Router) { }


      ngOnInit() {
          const body = document.getElementsByTagName('body')[0];
          body.classList.add('login-page');
    }

    login(loginForm: NgForm) {
        this.userService.login(loginForm.value).subscribe(
            (response: any) => {
                // console.log(response.jwtToken);
                // console.log("role",response.user.role[0]);

                this.userAuthService.setRoles(response.user.role);
                this.userAuthService.setToken(response.jwtToken);

// console.log(response)
                const role =  response.user.role[0].roleName;
                console.log(role) ;
                // tslint:disable-next-line:triple-equals
                // if (response.user.enabled == 1) {
                if (role === 'Admin') {
                    this.router.navigate(['admin/Products'])
                } else if (role === 'User') {
                    this.router.navigate(['admin/dashboard'])
                }


            },
            (error) => {
                console.log(error);
            }
        );

    }

    GoToRegister() {
        this.router.navigate(['register'])
    }


}


