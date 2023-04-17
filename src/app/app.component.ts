import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { user } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public HasError=false;
  title = 'tdf';
  submitted=false;
  clicked=false;
  username=new user("Rob","abc@gmail.com","123-456-6789","default","morning",true);

  constructor(private enrollService:EnrollmentService){

  }
  public courses=['Angular','Java',"python",'scala']
  onClick(value){
    if(value=="default"){
      this.HasError=true;

    }else
    this.HasError=false;
  }
  onSubmit(){
    this.submitted=true;
    this.clicked=true;
     this.enrollService.enroll(this.username).subscribe(

      (data)=>console.log('success!',data),
      (error)=>console.log('error',error))
  }

}
