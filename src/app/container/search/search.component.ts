import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  updateSearchText($event: Event) {
    this.searchText = ($event.target as HTMLInputElement).value;
  }
  searchText: string = '';
}
