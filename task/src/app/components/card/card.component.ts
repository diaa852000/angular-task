import { ActiveTicketService } from './../../services/active-ticket.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { QrCodeComponent } from "../qr-code/qr-code.component";
import { TooltipModule } from 'primeng/tooltip';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule, 
    QrCodeComponent, 
    TooltipModule, 
    InputSwitchModule, 
    FormsModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  text: string = "عرض التذكرة الخاصة بالفيلم";
  ticketLink: string = "www.tazkty.com/473847";
  isCopied: boolean = false;
  shareBtnText: string = "مشاركة"
  discount: number = 0.25;
  discountText: string = "خصم";
  flag!: boolean;
  expiration: string = 'فعال حتي 15 يوليو 2023';

  constructor(private activeTicketService: ActiveTicketService) {}

  ngOnInit() {
    this.activeTicketService.flag.subscribe(flag => {
      this.flag = flag;
      this.expiration = this.flag ? "فعال حتي 15 يوليو 2023" : "غير فعال";
    });
  }

  copyText(): void {
    navigator.clipboard.writeText(this.ticketLink).then(() => {
      this.isCopied = true;
    }).catch(err => {
      alert('Failed to copy text: ' + err);
    });
    this.isCopied = false;
  }

}
