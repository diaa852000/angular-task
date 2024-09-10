import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { QrCodeComponent } from "../qr-code/qr-code.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, QrCodeComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  text: string = "عرض التذكرة الخاصة بالفيلم";
  ticketLink: string = "www.tazkty.com/473847";
  expiration: string = "فعال حتي 15 يوليو 2023"; 
  shareBtnText: string = "مشاركة"
  discount: number = 0.25;
  discountText: string = "خصم";
}
