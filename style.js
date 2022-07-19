function BMI(){
  var w=document.getElementById('w').value;
  var h=document.getElementById('h').value;
  var bmi=w/(h/10*h/10);
  document.getElementById("result").innerHTML="Your BMI is" + bmi;
  }