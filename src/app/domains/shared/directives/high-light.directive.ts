import { Directive, ElementRef, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[highLight]',
  standalone: true
})
export class HighLightDirective implements OnInit {
  element = inject(ElementRef);
  constructor() {}

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = 'red';
  }
}
