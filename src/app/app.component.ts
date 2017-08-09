import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  clickMessage : string = '';
  values1 : string = '';
  values2 : string = '';
  fieldValue : string = '';
  enteredValue :string = '';
  values : any[] = ['apple','orange','banana','mango']
  
  
  onClickMe(): void
  {
    this.clickMessage = "my page event";
  }
  onKey(event: any) : void
  {
  debugger;
    this.values1 += event.target.value;
  }
   
  onEnter(value: string) { 
  this.enteredValue = value; }
  
  update(event : string): void
  {
    this.fieldValue = event;
  }
  
  addItem(event : string) : void
  {
    if(event)
    {
    alert(event);
    alert(this.values);
    this.values.push(event);
    debugger;
    }
  }
}
