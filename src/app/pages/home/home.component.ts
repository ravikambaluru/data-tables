import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/core/crud.service';
import { DataService } from 'src/app/core/data-service.service';
import { HttpService } from 'src/app/core/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpService,private data:DataService,private crud:CrudService) { }
  count:number=1;
  tableData:any=[];
  
  ngOnInit(): void {
  }

  topPageTitle="EMPLOYERS";

}
