import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  history: string [];

  ngOnInit(): void {
    this.httpService.get('./assets/install_history.json').subscribe(
      data => {
        this.history = data as string [];
      },
    );
  }

}
