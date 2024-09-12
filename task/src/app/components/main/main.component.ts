import { Component } from '@angular/core';
import { TicketInfoComponent } from "../ticket-info/ticket-info.component";
import { ChartComponent } from "../chart/chart.component";
import { TableComponent } from "../table/table.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TicketInfoComponent, ChartComponent, TableComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  newTicketBtn: string = "حجز تذكرة جديدة";
  TicketSales: string = "مبيعات التذكرة";
}
