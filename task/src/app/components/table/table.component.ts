import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { LazyLoadEvent } from 'primeng/api';
import { FileSaverModule } from 'ngx-filesaver';
import { DownloadService } from '../../services/download.service';
import { TooltipModule } from 'primeng/tooltip';
import { Ticket } from '../../types';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule, FileSaverModule, TooltipModule,],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  tickets: Ticket[] = [
    {
      name: 'أحمد محمود',
      ticketNumber: 'C-101',
      price: '$40',
      cinema: 'سينما مصر , مول العرب , برج الأبطال , سرايا القبة',
      personCount: 1,
      purchaseCount: 'مرة واحدة',
      avatar: '/assets/avatar.jpg',
      phone: '0123456789',
      tiketName: 'تذكرة فيلم 43',
      size: "9mb",
      type: "PDF",
      hiddenText: '',
    },
    {
      name: 'محمد الغريب',
      ticketNumber: 'C-102',
      price: '$30',
      cinema: 'سينما مصر , مول العرب , برج الأبطال , سرايا القبة',
      personCount: 1,
      purchaseCount: 'مرة واحدة',
      avatar: '/assets/avatar.jpg',
      phone: '0113456789',
      tiketName: 'تذكرة فيلم 43',
      size: "9mb",
      type: "PDF",
      hiddenText: '',
    },
    {
      name: 'خالد الغريب',
      ticketNumber: 'C-102',
      cinema: 'سينما مصر , مول العرب , برج الأبطال , سرايا القبة , عبدين ',
      price: '$35',
      personCount: 1,
      purchaseCount: 'مرة واحدة',
      avatar: '/assets/avatar.jpg',
      phone: '0113456789',
      tiketName: 'تذكرة فيلم 43',
      size: "9mb",
      type: "PDF",
      hiddenText: '',
    },
    {
      name: 'محسن الغريب',
      ticketNumber: 'C-102',
      price: '$32',
      personCount: 1,
      purchaseCount: 'مرة واحدة',
      cinema: 'سينما مصر , مول العرب , برج الأبطال , سرايا القبةو برج العرب',
      avatar: '/assets/avatar.jpg',
      phone: '0113456789',
      tiketName: 'تذكرة فيلم 43',
      size: "9mb",
      type: "PDF",
      hiddenText: '',
    },
    {
      name: 'علي الغريب',
      ticketNumber: 'C-102',
      price: '$35',
      personCount: 1,
      purchaseCount: 'مرة واحدة',
      cinema: 'سينما مصر , مول العرب , برج الأبطال , سرايا القبة',
      avatar: '/assets/avatar.jpg',
      phone: '0113456789',
      tiketName: 'تذكرة فيلم 43',
      size: "9mb",
      type: "PDF",
      hiddenText: '',
    },
    {
      name: 'ربيع الغريب',
      ticketNumber: 'C-102',
      price: '$50',
      personCount: 1,
      purchaseCount: 'مرة واحدة',
      cinema: 'سينما مصر , مول العرب , برج الأبطال , سرايا القبة',
      avatar: '/assets/avatar.jpg',
      phone: '0113456789',
      tiketName: 'تذكرة فيلم 43',
      size: "9mb",
      type: "PDF",
      hiddenText: '',
    },
    {
      name: 'محمد الغريب',
      ticketNumber: 'C-102',
      price: '$55',
      personCount: 1,
      purchaseCount: 'مرة واحدة',
      cinema: 'سينما مصر , مول العرب , برج الأبطال , سرايا القبة',
      avatar: '/assets/avatar.jpg',
      phone: '0113456789',
      tiketName: 'تذكرة فيلم 43',
      size: "9mb",
      type: "PDF",
      hiddenText: '',
    },
    {
      name: 'أحمد الغريب',
      ticketNumber: 'C-102',
      price: '$66',
      personCount: 1,
      purchaseCount: 'مرة واحدة',
      cinema: 'سينما مصر , مول العرب , برج الأبطال , سرايا القبة',
      avatar: '/assets/avatar.jpg',
      phone: '0113456789',
      tiketName: 'تذكرة فيلم 43',
      size: "9mb",
      type: "PDF",
      hiddenText: '',
    },
    {
      name: 'خالد الغريب',
      ticketNumber: 'C-102',
      price: '$30',
      personCount: 1,
      purchaseCount: 'مرة واحدة',
      cinema: 'سينما مصر , مول العرب , برج الأبطال , سرايا القبة',
      avatar: '/assets/avatar.jpg',
      phone: '0113456789',
      tiketName: 'تذكرة فيلم 43',
      size: "9mb",
      type: "PDF",
      hiddenText: '',
    },
    {
      name: 'ندى الغريب',
      ticketNumber: 'C-102',
      price: '$30',
      personCount: 1,
      purchaseCount: 'مرة واحدة',
      cinema: 'سينما مصر , مول العرب , برج الأبطال , سرايا القبة, صديناوي مول ',
      avatar: '/assets/avatar.jpg',
      phone: '0113456789',
      tiketName: 'تذكرة فيلم 43',
      size: "9mb",
      type: "PDF",
      hiddenText: ''
    },
  ];
  first: number = 0;
  rows: number = 4;
  totalRecords: number = this.tickets.length;
  rowOptions: number[] = [4, 8, 10];
  isArabic: boolean = true;

  constructor(private downloadService: DownloadService, private cdr: ChangeDetectorRef) {}

  onDownload() {
    this.downloadService.downloadFile('path/to/file.pdf', 'file.pdf').subscribe({
      next: () => {
        console.log('Download completed successfully.');
      },
      error: (err) => {
        console.error('Download error:', err);
      }
    });
  }

  get totalPages(): number {
    return Math.ceil(this.totalRecords / this.rows);
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  next() {
    this.first = Math.min(this.first + this.rows, this.totalRecords - this.rows);
  }

  prev() {
    this.first = Math.max(this.first - this.rows, 0);
  }
  goToPage(page: number) {
    this.first = (page - 1) * this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: LazyLoadEvent) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
  }

  isLastPage(): boolean {
    return this.first + this.rows >= this.totalRecords;
  }

  isFirstPage(): boolean {
    return this.first === 0;
  }
  get firstRecord(): number {
    return this.first + 1;
  }

  get lastRecord(): number {
    return Math.min(this.first + this.rows, this.totalRecords);
  }

  onRowsPerPageChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.rows = Number(selectElement.value);
    this.first = 0; 
  }

  truncateText(text: string, maxLength: number, ticket: Ticket): string {
    if (text.length > maxLength) {
      ticket.hiddenText = text.slice(maxLength);
      return text.substring(0, maxLength) + '...';
    }
    ticket.hiddenText = '';
    return text;
  }

}
