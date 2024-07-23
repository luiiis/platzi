import { Component , OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  pizzas: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders({
        'Authorization': 'Basic dXNlcjo3MGE0ZjI0NC1kZmMxLTQzODctOTEwMi05NWRkMjY5OWQzYzE='
      }), 
    };
    
    this.http.get('http://localhost:8080/api/pizzas/available', requestOptions).subscribe(response => {
      this.pizzas = response;
    });
  }
}