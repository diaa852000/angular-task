import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicketInfoComponent } from "./components/ticket-info/ticket-info.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    TicketInfoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
