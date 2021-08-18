import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    const data1 = [] as any
    const data2 = [] as any

    this.username = localStorage.getItem("username")
    let self = this;
    this.http.get("https://jsonplaceholder.typicode.com/posts")
      .subscribe(
        {
          next: (datas: any) => {
            console.log(datas);
            data1.push(datas)
            this.data = datas
          },
          complete: () => { },
          error: (err) => {
            console.log(err);

          }
        }
      )
    this.http.get("https://jsonplaceholder.typicode.com/users")
      .subscribe(
        {
          next: (x: any) => {
            console.log(x);
            data2.push(x)
          },
          complete: () => { },
          error: (err) => {
            console.log(err);

          }
        }
      )
    

  }
  username: any;
  data: any


}

