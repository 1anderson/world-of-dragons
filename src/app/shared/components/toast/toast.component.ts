import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  message: '';
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {}
  showMessage(message?) {
    this.message = message;
    this.renderer.addClass(this.elementRef.nativeElement, 'show');
    setTimeout(() => {
      this.renderer.removeClass(this.elementRef.nativeElement, 'show');
      this.message = '';
    }, 3000);

  }

  showErrorMessage(message?) {
    this.renderer.addClass(this.elementRef.nativeElement, 'show-error');
    setTimeout(() => {
      this.renderer.removeClass(this.elementRef.nativeElement, 'show-error');
    }, 3000);

  }

}
