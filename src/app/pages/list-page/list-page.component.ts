import { Component } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent {
  userInput: string = '';
  setUserInput(term: string) {
    this.userInput = term;
  }
}
