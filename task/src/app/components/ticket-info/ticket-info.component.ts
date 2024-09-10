import { Component } from '@angular/core';
import { ChartComponent } from "../chart/chart.component";
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-ticket-info',
  standalone: true,
  imports: [ChartComponent, CardComponent],
  templateUrl: './ticket-info.component.html',
  styleUrl: './ticket-info.component.css'
})
export class TicketInfoComponent {
  tiketName: string = "تذكرة رقم #2342";
  editBtnName: string = "تعديل";
}
