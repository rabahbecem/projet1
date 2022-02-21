import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { User } from '../user';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  public users!:User[];
  public user!: User;
  constructor(private route: ActivatedRoute,private router: Router,private connectionservice : ConnectionService) { }
   readData:any;
  fetchData(){
  this.connectionservice.findAll().subscribe((res) =>{
    this.users=res.users;
    console.log(res,"res==>");
   
  })
}
  ngOnInit(): void {
    this.fetchData();
  }

}
