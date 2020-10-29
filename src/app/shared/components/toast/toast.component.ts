import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {}

  showMessage() {
    this.renderer.addClass(this.elementRef.nativeElement, 'show');
    setTimeout(() => {
      this.renderer.removeClass(this.elementRef.nativeElement, 'show');
    }, 3000);

  }

}
