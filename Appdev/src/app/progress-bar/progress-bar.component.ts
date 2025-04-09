import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { TUser } from '../interface/TUser';
import { MatSort, Sort } from '@angular/material/sort';

export interface PeriodicElement {
  name: number | string;
  position: number;
  weight: number;
  symbol: string;
}

// @title
@Component({
  selector: 'app-progress-bar',
  standalone: false,
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})

// const USE_DATA: TUser[]; // Use the imported data
export class ProgressBarComponent implements AfterViewInit {
  generateRandomUsers = (count: number): TUser[] => {
    const users: TUser[] = [];
    for (let i = 0; i < count; i++) {
      const id = `user${i + 1}`;
      const name = `User ${i + 1}`;
      const balance = parseFloat((Math.random() * 10000).toFixed(2));
      const email = `user${i + 1}@example.com`;
      const registerAt = new Date(
        Date.now() - -Math.floor(Math.random() * 365) * 24 * 60 * 60 * 1000
      );
      const active = true;

      users.push({
        id,
        name,
        balance,
        email,
        registerAt,
        active,
      });
    }
    return users;
  };

  USE_DATA: TUser[] = this.generateRandomUsers(100);
  dataSource = new MatTableDataSource<TUser>(this.USE_DATA);
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = [
    'name',
    'balance',
    'email',
    'registerAt',
    'active',
    'action',
  ];

  length = this.USE_DATA.length; // This is the total number of items
  pageSize = 10; // Default page size
  pageIndex = 0;
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  handlePageEvent(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  openEmailClient(email: string) {
    console.log('Đang check --->' + email);
    window.location.href = 'mailto:' + email;
    // Logic for showing email
  }

  editItem(element: TUser) {
    console.log('Edit item:', element);
    // Logic for editing item
  }

  deleteItem(element: TUser) {
    console.log('Delete item:', element);
    // Logic for deleting item
  }

  // Fillter
  handleFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
}
