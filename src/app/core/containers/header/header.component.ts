import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
  @Input() isLoggedIn = false;
  @Output() userLogout = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {
    console.log(this.isLoggedIn);
  }

  logout() {
    this.userLogout.emit();
  }
}
