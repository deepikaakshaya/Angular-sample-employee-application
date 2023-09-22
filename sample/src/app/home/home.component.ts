import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  item: string = '';
  showCount: number = 0;

  broadcastMessage(subject: string): void {
    this.item = subject;
  }
  countChanged(count: any): void {
    this.showCount = count;
  }
}
