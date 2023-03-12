import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  Subject,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @Output() userInputEvent: EventEmitter<string> = new EventEmitter();
  private searchTerms = new Subject<string>();
  private searchSubscription!: Subscription;

  setUserInput(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.searchSubscription = this.searchTerms
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((term) => {
        this.userInputEvent.emit(term);
      });
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
    this.searchTerms.complete();
  }
}
