import { Component } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
})
export class AppComponent {
  constructor(private readonly route: ActivatedRoute) {}

  isCollapsed = false;
  isReverseArrow = false;
  width = 250;

  siderRoutes = [
    { label: 'dashboard', href: '/', icon: 'anticon-file' },
    { label: 'awesomes', href: '/awesomes', icon: 'anticon-file' },
    { label: 'bookmarks', href: '/bookmarks', icon: 'anticon-file' },
  ];
}
