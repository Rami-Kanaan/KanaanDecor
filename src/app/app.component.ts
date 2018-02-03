import { Component, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from './windows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isSmall: boolean = false;
  move: boolean = false;
  moveText: boolean = true

  
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) { }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (offset > 355) {
      //console.log(offset);
      this.isSmall = true;
      this.move = true;
      this.moveText = false
    }
    else {
      this.isSmall = false;
      this.move = false;
      this.moveText = true;
    }
  }

}
