function get(){
  
  var month=document.getElementById("month").value;
  var mm=parseInt(month);
  var day=document.getElementById("day").value;
  var dd=parseInt(day);
  var year=document.getElementById("year").value;
  var yy=parseInt(year);
  var cc=(yy-1)/100+1;
 
  var result=parseInt( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd) % 7 ;
  var boyNames=["Kwasi","Kwadwo","Dejong","Kwaku","Yaw","Kofi","Kwame"];
  var girlNames=["Akosua"," Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
  if (document.getElementById("gender").checked)
  {
    var gender='male';
  }
 else {
    var gender='female';
 }
 
  if (mm < 1  || mm>12 || mm==2 && dd>29)
 {
    alert("check again");
 }
 else if ( dd< 1 || dd>31)
 {
    alert("check again");
 }
 
  if (Math.round(result)==0 && gender==='male')
  {
 document.getElementById("show").innerHTML = ("Your akan name is "+ boyNames[0]);
 }
 
  else if (Math.round(result)==1 && gender==='male')
  {
    document.getElementById("show").innerHTML =("Your akan name is "+ boyNames[1]);
  }
  else if (Math.round(result)==2 && gender==='male'){
    document.getElementById("show").innerHTML =("Your akan name is " +boyNames[2]);
  }
  else if (Math.round(result)==3 && gender==='male' )
  {
    document.getElementById("show").innerHTML =("Your akan name is "+ boyNames[3]);
  }
  else if (Math.round(result)==4 && gender==='male')
  {
    document.getElementById("show").innerHTML = ("Your akan name is "+ boyNames[4]);
  }
  else if (Math.round(result)==5 && gender==='male')
  {
    document.getElementById("show").innerHTML = ("Your akan name is "+ boyNames[5]);
  }
  else if (Math.round(result)==6 && gender==='male')
  {
    document.getElementById("show").innerHTML = ("Your akan name is "+ boyNames[6]);
  }

  else if(Math.round(result)==0 && gender==='female')
  {
    document.getElementById("show").innerHTML =  ("Your akan name is "+ girlNames[0]);
  }
 
   else if(Math.round(result)==1 && gender==='female')
  {
    document.getElementById("show").innerHTML = ("Your akan name is "+ girlNames[1]);
  }
  else if (Math.round(result)==2 && gender==='female')
  {
    document.getElementById("show").innerHTML = ("Your akan name is "+ girlNames[2]);
  }
  else if (Math.round(result)==3 && gender==='female')
  {
    document.getElementById("show").innerHTML =("Your akan name is "+ girlNames[3]);
  }
  else if (Math.round(result)==4 && gender==='female')
  {
    document.getElementById("show").innerHTML = ("Your akan name is "+ girlNames[4]);
  }
  else if (Math.round(result)==5 && gender==='female')
  {
    document.getElementById("show").innerHTML =  ("Your akan name is "+ girlNames[5]);
  }
  else if (Math.round(result)==6 && gender==='female')
  
  {
    document.getElementById("show").innerHTML = ("Your akan name is "+ girlNames[6]);
  }
  
  else
  {
   alert("Enter information");
  }
}