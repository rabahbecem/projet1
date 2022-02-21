import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from './connection.service';
import { Login } from './login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front_angular';
  
     public login : Login;
  constructor(private route : ActivatedRoute,private router :Router,
    public connectionservice:ConnectionService ) {
      this.login = new Login();
     }

  ngOnInit(): void {
  }
  connect(form : NgForm){
    this.connectionservice.connect(this.login).subscribe(
        (res) =>{
            if(res.message=="erreur de connection"){
              console.log(res.message)
            alert("user not found!");
           
          }else{
            this.router.navigate(['/user']);
          }
        } 
      );
       
    }

   
}
