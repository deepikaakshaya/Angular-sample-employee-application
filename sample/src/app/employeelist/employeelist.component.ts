import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeelistService } from '../employeelist.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],
})
export class EmployeelistComponent {
  @Input() item: string | undefined;
  @Output() onChanged = new EventEmitter<number>();

  constructor(private _empList: EmployeelistService) {}

  names: any;
  loading: boolean = true;
  datastorage: any;
  send: number = 0;
  searchtext: any;

  ngOnInit() {
    if (localStorage.getItem('datastorage')) {
      this.names = JSON.parse(localStorage.getItem('datastorage') || '');
      this.loading = false;
    } else {
      this._empList.getEmployeeList().subscribe((res: any) => {
        this.names = res.users;
        localStorage.setItem('datastorage', JSON.stringify(res.users));
        this.loading = false;
      });
    }
  }

  childtoParent(s: number) {
    s++;
    this.send = s;
    this.onChanged.emit(this.send);
  }
  displayedColumns:string[]=['firstName','age','lat'];
}
