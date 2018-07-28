import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api = 'http://localhost:3000/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
})
export class AppComponent {
  constructor(http: HttpClient) {
    http.get<{ app_name: string }>(api).subscribe((res) => {
      console.log(res);
      this.title = res.app_name;
    });
  }
  title = 'app';
}
