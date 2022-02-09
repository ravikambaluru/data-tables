import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers:[DataService]
})
export class FooterComponent implements OnInit {
  paginateArr:any=[];
  createPagination=(start=1,stop=1,step=1)=>{
    let p={};
    for (let index = start; index <= stop; index++) {
        if (this.data.activeLink==index) {
           p={number:index,active:true};
           this.paginateArr.push(p);
        }
        else{
           p={number:index,active:false};
           this.paginateArr.push(p);
        }
        
      }
  };
  constructor(private data:DataService) { }

  urlClickHandler=(num:any)=>{
    this.data.updateLimits(num);
  }
  ngOnInit(): void {
    this.createPagination(1,this.data.perPage,1);
  }

}
