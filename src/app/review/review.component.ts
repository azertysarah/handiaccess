import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  @Input() review : any;

  constructor(){}

  onIncrementCounter(counter: string){
    if(counter == 'useful') {
        // function to the back
    }
    if(counter == 'useless'){
        // function to the back
    }
  }

}
