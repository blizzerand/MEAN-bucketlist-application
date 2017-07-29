import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { List } from '../models/List'

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {
  
  //lists propoerty which is an array of List type
  private lists: List[] = [];

  constructor(private listServ: ListService) { }

  ngOnInit() {
  
    //Load all list on init 
  	this.loadLists();
  }

  public loadLists() {
	
	//Get all lists from server and update the lists property
	this.listServ.getAllLists().subscribe(
		response => this.lists = response,)
		
  }

  //The deleted list is being filtered out using the .filter method
  public deleteList(list: List) {
    this.listServ.deleteList(list._id).subscribe(
	  response =>	this.lists = this.lists.filter(lists => lists !== list),)
		
	}

  //onAddList will be invoked when the child component emits an event
  public onAddList(newList) {
    this.lists = this.lists.concat(newList);
  }
}
	
