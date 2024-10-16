import { Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  
  enteredInitialInvestment='0';
  enteredAnnualInvestment='0';
  enteredExpectedReturn='5';
  enteredDuration='10';
onSubmit(){
this.calculate.emit({
  initialInvestment:+this.enteredAnnualInvestment,
  duration:+this.enteredDuration,
  expectedReturn:+this.enteredExpectedReturn,
  annualInvestment:+this.enteredAnnualInvestment
});




}
 

}
