import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'akhileshjha.in';

  ngOnInit(): void {
    this.updateScrollVars();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateScrollVars();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateScrollVars();
  }

  private updateScrollVars(): void {
    const root = document.documentElement;
    root.style.setProperty('--scroll-y', `${window.scrollY}px`);
  }
}
