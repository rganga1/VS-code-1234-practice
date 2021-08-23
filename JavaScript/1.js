console.log(5)

var person=function(){
  this.pname="rakesh";
  this.print=function(){
    console.log("Hi"+this.pname);
  }
}

var p1=new person;
p1.print();







