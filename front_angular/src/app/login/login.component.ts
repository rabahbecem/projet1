import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ConnectionService]
})
export class LoginComponent implements OnInit {
  myform! : FormGroup;
  public login : Login;
  constructor(private route : ActivatedRoute,private router :Router,
    private connectionservice:ConnectionService ) {
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
