import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {

  @Input()
    buttonColor:String;
    
  

  constructor(private elementRef:ElementRef) { }

  ngOnInit():void{
    this.elementRef.nativeElement.style.backgroundColor=this.buttonColor;
    this.elementRef.nativeElement.style.color="white";
  }

  @HostListener('mouseenter') onMouseEnter(){

    this.elementRef.nativeElement.style.backgroundColor=this.buttonColor;
  }

  @HostListener('mouseleave') onMouseLeave()
  {
    this.elementRef.nativeElement.style.backgroundColor="blue";
  }

}
