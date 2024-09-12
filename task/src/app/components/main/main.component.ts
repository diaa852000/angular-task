import { Component } from '@angular/core';
import { TicketInfoComponent } from "../ticket-info/ticket-info.component";
import { ChartComponent } from "../chart/chart.component";
import { TableComponent } from "../table/table.component";
import { FormsModule } from '@angular/forms';
import { ActiveTicketService } from '../../services/active-ticket.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TicketInfoComponent, ChartComponent, TableComponent, FormsModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  newTicketBtn: string = "حجز تذكرة جديدة";
  TicketSales: string = "مبيعات التذكرة";
  placeholder:string  = 'بحث عن ...';
  isActiveTicket = true;
  isArabic: boolean = true;

  constructor(private activeTicketService: ActiveTicketService ) {}

  toggleActivation() {
    this.isActiveTicket = !this.isActiveTicket;
    this.activeTicketService.toggleActivation(this.isActiveTicket)
  }

}
