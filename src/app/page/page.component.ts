import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.styl'],
})
export class PageComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
