import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { List } from '../models/List';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  private newList :List;
  @Output() addList: EventEmitter<List> = new EventEmitter<List>();
  constructor(private listServ: ListService) { }
 
  ngOnInit() {
  	this.newList = {
  		title: '',
  		category:'',
  		description:'',
  		_id:''

  	}
  }

  public onSubmit() {
  	console.log(this.newList.category);
  	this.listServ.addList(this.newList).subscribe(
  		response=> {
  			
  			if(response.success== true)
  				this.addList.emit(this.newList);
  		},
	);

	}
}