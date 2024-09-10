import { Component } from '@angular/core';
import { TicketInfoComponent } from "../ticket-info/ticket-info.component";
import { ChartComponent } from "../chart/chart.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TicketInfoComponent, ChartComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
