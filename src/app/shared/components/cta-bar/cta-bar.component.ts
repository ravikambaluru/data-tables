import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CrudService } from 'src/app/core/crud.service';
import { DataService } from 'src/app/core/data-service.service';

@Component({
  selector: 'app-cta-bar',
  templateUrl: './cta-bar.component.html',
  styleUrls: ['./cta-bar.component.css']
})
export class CtaBarComponent implements OnInit {
count:number=this.data.count;
dataMin:number=this.data.minCount;
dataMax:number=this.data.maxCount;
subscription!:Subscription;
selectedRowsCount:Number=0;

constructor(private data:DataService,private crud:CrudService) { 
  this.subscription=this.crud.onSelectedRowsIncreament().subscribe(res=>{
    this.selectedRowsCount=res;
  });
}

  ngOnInit(): void {
  }

  deleteItems=()=>{
    this.crud.deleteItems();
  }

  onSelectAll=()=>{
    this.crud.selectAllItems();
  }

}
