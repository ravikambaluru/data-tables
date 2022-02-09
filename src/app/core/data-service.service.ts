
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { data } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  count:number=1;
  usersData:data[]=[];
  perPage:number=5;
  totalLinks=this.count/this.perPage;
  activeLink=1;
  minCount=0;
  maxCount=this.minCount+this.perPage-1;
  selectAll=false;
  constructor() {
    
   }

  initializeData=(data:any)=>this.usersData=data;

  deleteElements=(el:any)=>{
    
    el.forEach((ele:any)=> {
      delete this.usersData[ele];
    });
    return this.usersData;
  }
  updateLimits=(min:any)=>{
    this.minCount=min*this.perPage;
    this.maxCount=this.minCount+this.perPage-1;
  }
  getUserData=()=>this.usersData;

  
}
