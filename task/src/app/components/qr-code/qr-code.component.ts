import { Component } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';


@Component({
  selector: 'app-qr-code',
  standalone: true,
  imports: [QRCodeModule],
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.css'
})
export class QrCodeComponent {
  myAngularxQrCode: string = "hello";

  constructor() {
    this.myAngularxQrCode = "this is a qr code test";
  }
}
