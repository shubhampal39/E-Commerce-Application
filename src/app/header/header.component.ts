import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType: string = 'Default';
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((value: any) => {
      if (value.url) {
        console.log(value.url);
        if (localStorage.getItem('seller') && value.url.includes('seller')) {
          console.warn('in seller area');
          this.menuType = "seller";
        }
        else {
          console.warn("outside seller")
          this.menuType = 'default';

        }
      }
    })
  }

}