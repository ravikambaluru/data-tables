import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { data } from "./data";
import { DataService } from "./data-service.service";

@Injectable({
  providedIn: "root",
})

export class CrudService {
  private subject = new Subject<data[]>();
  private selectFlag = new Subject<boolean>();
  private slectedFieldsFlag=new Subject<Number>();
  selectedFields: any = [];
  
  constructor(private data: DataService) {}
  
  deleteItems = () => {
    if (this.selectedFields.length == 0) {
      alert("Please select items before deleting");
    }
    let data = this.data.deleteElements(this.selectedFields);
    this.subject.next(data);
  };
  
  selectAllItems = () => {
    let flag = this.data.selectAll;
    let data = this.data.getUserData();
    data.forEach((data) => {
      this.updateSelected(data.id);
    });
    console.log(this.selectedFields);
    this.selectFlag.next(!flag);
    this.slectedFieldsFlag.next(this.selectedFields.length);
  };
  
  updateSelected = (id: any) =>{
    
    this.slectedFieldsFlag.next(this.selectedFields.length);
    this.selectedFields.push(id);
  
  }

  onSelectAll(): Observable<boolean> {
    return this.selectFlag.asObservable();
  }
  
  onSelectedRowsIncreament=()=>{
    return this.slectedFieldsFlag.asObservable();
  }

  onDelete(): Observable<any> {
    return this.subject.asObservable();
  }
}
