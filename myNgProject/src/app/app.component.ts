import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myNgProject';
  name: string = "Miss Pornrat Phanmongkol";
  score:number=99;
  student:any = {
    name : "Peter",
    studentID : "5921602671",
    weight : 60,
    height : 157
  }
  studentlist = [{
    name : "Peter",
    studentID : "5921602671",
    weight : 50,
    height : 157
  },
  {
    name : "Peter1",
    studentID : "5921602672",
    weight : 88,
    height : 157
  },
  {
    name : "Peter",
    studentID : "5921602671",
    weight : 40,
    height : 157
  }]

  constructor(){
    this.student.bmi =(this.student.weight/((this.student.height/100)*(this.student.height/100))).toFixed(2);
    this.studentlist.map((object,index)=>{
      let obj:any =object;
      obj.bmi=(object.weight/((object.height/100)*(object.height/100))).toFixed(2);
      return obj;
    })
    
  }
 
}

