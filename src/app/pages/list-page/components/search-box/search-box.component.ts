import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  @Output() userInputEvent: EventEmitter<string> = new EventEmitter();

  setUserInput(term: string): void {
    this.userInputEvent.emit(term);
  }
}
