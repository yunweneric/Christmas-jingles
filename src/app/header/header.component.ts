import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggleMobileNav = false;
  toggleSearchBar = false;

  toggleClass() {
    this.toggleMobileNav = !this.toggleMobileNav;
    // this.toggleSearchBar = !this.toggleSearchBar
  }

  toggleSearch() {
    // this.toggleMobileNav = !this.toggleMobileNav;
    this.toggleSearchBar = !this.toggleSearchBar
    console.log("toggle search working");
  }
  
  constructor() { }


  ngOnInit(): void {
  }

}


