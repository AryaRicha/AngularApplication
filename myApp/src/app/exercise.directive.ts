import { Directive,TemplateRef,ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[appExercise]'
})
export class ExerciseDirective {
  

  constructor(private templateRef:TemplateRef<any>,private ViewContainer:ViewContainerRef) { }

  @Input() set appExercise(numTimes:number)
  {
    console.log(numTimes);
    if(numTimes>0)
    {
      for(let n=0;n<numTimes;n++)
      {
        this.ViewContainer.createEmbeddedView(this.templateRef);
      }
    }else{
      this.ViewContainer.clear();
    }
  }

  
}
