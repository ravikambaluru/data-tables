import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { CrudService } from 'src/app/core/crud.service';
import { data } from 'src/app/core/data';
import { DataService } from 'src/app/core/data-service.service';
import { HttpService } from 'src/app/core/http.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']

})
export class TableComponent implements OnInit {
  subscription!: Subscription;
  selectAll:boolean=false;
  constructor(private http: HttpService, private dataService: DataService, private crud: CrudService) { 
    this.subscription=this.crud.onDelete().subscribe(res=>{
      this.datas=res;
      alert("deleted sucessfully");

    });
    this.crud.onSelectAll().subscribe(res=>{
      this.dataService.selectAll=res;
      this.selectAll=res;
    })
  }
  idflag: boolean = false;
  nameflag: boolean = false;
  emailflag: boolean = false;
  usernameflag: boolean = false;
  datas: any = [];

  ngOnInit(): void {
    this.http.getUsersData().subscribe((res: any[]) => {
      this.dataService.initializeData(res);
      this.datas=res;
      localStorage.setItem("data", JSON.stringify(this.dataService.usersData));
    }, err => {
      console.log(err);
    });

  }

  onClickCheckbox = (val: any) => {
    this.crud.updateSelected(val);
  }

  // SORTING LOGICS FOR FIELDS

  nameSort = (text: string) => {


    if (text == 'name') {
      if (this.nameflag === true) {
        this.datas.sort((a: any, b: any) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);


      }
      else {
        this.datas.sort((a: any, b: any) => b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1);

      }
      this.nameflag = !this.nameflag;

    }
    if (text == 'email') {
      if (this.emailflag === true) {
        this.datas.sort((a: any, b: any) => a.email.toLowerCase() > b.email.toLowerCase() ? 1 : -1);


      }
      else {
        this.datas.sort((a: any, b: any) => b.email.toLowerCase() > a.email.toLowerCase() ? 1 : -1);

      }
      this.emailflag = !this.emailflag;

    }
    if (text == 'username') {
      if (this.usernameflag === true) {
        this.datas.sort((a: any, b: any) => a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1);


      }
      else {
        this.datas.sort((a: any, b: any) => b.username.toLowerCase() > a.username.toLowerCase() ? 1 : -1);

      }
      this.usernameflag = !this.usernameflag;

    }
  }

  idSort = () => {





    if (this.idflag === true) {
      this.datas.sort((a: any, b: any) => a.id - b.id);


    }
    else {
      this.datas.sort((a: any, b: any) => b.id - a.id);

    }

    this.idflag = !this.idflag;

  }




}
