import {Component} from '@angular/core';

@Component({
selector : 'my-click',
templateUrl : 'app/onClickMe'

})

export class ClickComponent
{
   meassage : string = '';
   
   onclick() : void{
   this.message = 'hello';
   }
}