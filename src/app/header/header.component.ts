import { Component, OnInit, Inject, HostListener, Input } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from '../windows.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isSmall: boolean;
  @Input() move: boolean;
  @Input() moveText: boolean

  constructor() { }
  
  ngOnInit() {
  }

}
