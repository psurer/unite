import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Defining an interface to represent the search result object
interface SearchResult {
  id: number;
  title: string;
  description: string;
  type: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})

// Initializing variables to hold the search query and type and search results 
export class SearchComponent {
  query = '';
  type = 'event';
  results: SearchResult[] = [];

  // creating a constructor to inject the HttpClient module for making API requests
  constructor(private http: HttpClient) {}

  // defining a search function that gets called when the user submits the search form
  // we will implement a search feature by making an HTTP GET request to a search API endpoint and displaying the results. 
  search() {
    this.http
      .get<SearchResult[]>(`/api/search?type=${this.type}&query=${this.query}`)
      // Subscribing to the response data and setting the search results with it
      .subscribe((data) => {
        this.results = data;
      });
  }
}

