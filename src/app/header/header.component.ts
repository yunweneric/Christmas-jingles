import { Component, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

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
  @ViewChild('input')
  inputElement!: ElementRef;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  
  constructor() { }


  ngOnInit(): void {
  }
  ngAfterViewInit() {
    // fromEvent(this.inputElement.nativeElement, 'keyup')
    //   .pipe(
    //     debounceTime(500),
    //     pluck('target', 'value'),
    //     distinctUntilChanged(),
    //     filter((value: string) => value.length > 3),
    //     map((value) => value)
    //   )
    //   .subscribe(value => {
    //     this.search.emit(value);
    //   });
  }

}