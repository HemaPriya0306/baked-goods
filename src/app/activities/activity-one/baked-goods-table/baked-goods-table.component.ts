import { Component } from '@angular/core';
import { BakedGoods } from 'src/app/shared/mock-data';
import { BakedGood } from '../../../models/baked-good';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-baked-goods-table',
  templateUrl: './baked-goods-table.component.html',
  styleUrls: ['./baked-goods-table.component.css']
})
export class BakedGoodsTableComponent {
  data: BakedGood[] = BakedGoods;
  sortField: string = '';
  sortOrder: string = 'asc';
  filterText: string = '';
  showModal: boolean = false;

  constructor(private notificationService: NotificationService) { }

  sortData(field: string) {
    if (this.sortField === field) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortOrder = 'asc';
    }

    this.data.sort((a, b) => {
      const isAsc = this.sortOrder === 'asc';
      switch (field) {
        case 'id':
          return isAsc ? a.id - b.id : b.id - a.id;
        case 'type':
          return isAsc ? a.type.localeCompare(b.type) : b.type.localeCompare(a.type);
        case 'name':
          return isAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        case 'topping':
          return isAsc ? a.topping.localeCompare(b.topping) : b.topping.localeCompare(a.topping);
        default:
          return 0;
      }
    });
  }

  filterBakedGoods(value: string) {
    const text = value.toLowerCase();
    this.data = BakedGoods;
    if (value.length > 0) {
      this.data = this.data.filter(bg =>
        bg.id.toString().includes(text) ||
        bg.type.toLowerCase().includes(text) ||
        bg.name.toLowerCase().includes(text) ||
        bg.topping.toLowerCase().includes(text));
    }
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = !this.showModal;
  }

  addBakedGood(good: BakedGood) {
    this.data.unshift(good);
    this.closeModal();
    this.notificationService.showNotification(`${good.name.toLocaleUpperCase()} added!`, 3000);
  }
}