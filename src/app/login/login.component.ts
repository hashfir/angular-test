import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  navigateToLogin() {
    this.router.navigateByUrl('/login');
  }

  onSubmit(data: any) {
    let self = this;
    this.http.get("https://jsonplaceholder.typicode.com/users")
      .subscribe((result: any) => {
        result.map(function (item: any) {
          if (item.name = data.Username) {
            localStorage.setItem('username', data.Username);
            self.router.navigateByUrl('/home');
          }

        });

      }
      )

  }

  ngOnInit(): void {
  }

}
