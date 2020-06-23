//        ch # 21-25 STRING METHODS TASK 1

//var firstName = prompt("Enter first name");
//var LastName = prompt("Enter Last name");
//var fullName=(firstName+" "+LastName);
//alert(fullName);


//        ch # 21-25 STRING METHODS TASK 2

//var Mobile = prompt(" Your favorite mobile is :");
//document.write("<h1> My favorite phone is : "+Mobile+"</h1>")
//document.write("Lenght of string : "+Mobile.length);

//        ch # 21-25 STRING METHODS TASK 3

//var word = "pakistan";
//document.write("<h1>String of pakistan </h1>")
//document.write("<h1>Index of n :"+word.indexOf('n'));


//        ch # 21-25 STRING METHODS TASK 4

//var word = "Hello World";
//document.write("<h1> String : "+word+"</h1>");
//document.write("<h1> Last index of ' l ' : "+word.lastIndexOf('l')+"</h1>");


//        ch # 21-25 STRING METHODS TASK 5

//var word = "pakistani";
//document.write("<h1>String : "+word +"</h1>");
//document.write("<h1>Character at index 3 : "+word.charAt(3) +"</h1>");


//        ch # 21-25 STRING METHODS TASK 6

//var firstName = prompt("enter first name");
//var LastName = prompt("enter last name");
//var fullName=firstName.concat(LastName)
//document.write(fullName);


//        ch # 21-25 STRING METHODS TASK 7

//var city1="hyderabad";
//document.write("<h1>CITY : "+ city1+"</h1>");
//document.write("<h1>AFTER REPLACEMENT : "+ city1.replace("hyder","islam")+"</h1>");


//        ch # 21-25 STRING METHODS TASK 8

//var message = ("Ali and Sami are best friends. They play cricket and football together.");
//document.write("<h1>BEFORE REPLACEMENT : "+ message+"</h1>");
//document.write("<h1>AFTER REPLACEMENT : "+ message.replace(/and/g,"&")+"</h1>");


//        ch # 21-25 STRING METHODS TASK 9

//var value1 = "427";
//document.write("<h1>VALUE : "+(value1)+"</h1>");
//document.write("<h1>TYPE : STRING </h1>");
//var value2 = parseInt("427");
//document.write("<h1>VALUE : "+(value2)+"</h1>");
//document.write("<h1>TYPE : INTEGER NUMBER </h1>");

//        ch # 21-25 STRING METHODS TASK 10

//var input= prompt("enter your name : ");
//document.write("<h1>User input : "+input+"</h1>")
//document.write("<h1>Uper case output : "+input.toUpperCase()+"</h1>");


//        ch # 21-25 STRING METHODS TASK 11

//var input= prompt("enter your name : ");
//document.write("<h1>User input : "+input+"</h1>");
//document.write("<h1>Title case output : "+input.slice(0,1).toUpperCase()+input.slice(1).toLowerCase()+"</h1>");


//        ch # 21-25 STRING METHODS TASK 12

//var num = "35.36" 
//var string= num.toString();
//document.write(string);


//        ch # 21-25 STRING METHODS TASK 13

//var userName = prompt("enter name");
//if(userName.slice(0) === charAt('!'))
//{
 //  alert("invalid");
//}


//        ch # 21-25 STRING METHODS TASK 14

//var list = ["cake", "apple pie", "cookie", "chips", "patties"];
//var input = prompt("what do you want to order");
//input = input.toLowerCase();
//for(var i=0; i<list.length; i++)
//{
 //   if(list[i] === input)
  //  {
    //    document.write(input+" is avalible at index : "+(i)+" in our bakery");
    //    break;
   // }

   
//}

//for(var i=0; i<list.length; i++)
//{
//if(list[i] != input)
//{
  //  document.write(input+" is not avalible  in our bakery");
 //   break;
//}
//}


//        ch # 21-25 STRING METHODS TASK 15

//var pas = prompt("Enter password");
//if(pas.slice(0,1) != parseInt || pas.length != '6' )
//{
//alert("not valid");
//}
//else
//{
//   alert("valid");
//}



//        ch # 21-25 STRING METHODS TASK 16

//var name =["University of Karachi"];
//for(var i=0; i< name.length; i++)
//{
//    document.write(name[i]+"<br>");
//}

//        ch # 21-25 STRING METHODS TASK 17

//var input = prompt("enter country name :");
//document.write("Input :"+input+"<br>");
//var n = input.length;
//document.write("last char or input  : "+input.lastIndexOf(n));

//        ch # 21-25 STRING METHODS TASK 18










//        ch # 26 - 30 MATH METHODS TASK 1

//var num = prompt("enter number ");
//document.write("Number : "+num);
//num=Math.round(num);
//document.write("<br>Round of value : "+num);
//num=Math.floor(num);
//document.write("<br>Floor value : "+num);
//num=Math.ceil(num);
//document.write("<br>Ceil value : "+num);

//        ch # 26 - 30 MATH METHODS TASK 2

//var num = prompt("enter number ");
//document.write("Number : "+num);
//num=Math.round(num);
//document.write("<br>Round of value : "+num);
//num=Math.floor(num);
//document.write("<br>Floor value : "+num);
//num=Math.ceil(num);
//document.write("<br>Ceil value : "+num);

//        ch # 26 - 30 MATH METHODS TASK 3

//var num = prompt("enter number ");
//var abs;
//abs=Math.abs(num);
//document.write("<br>The absolute value of : "+num+" is "+abs);


//        ch # 26 - 30 MATH METHODS TASK 4

//var dice = Math.random()*6;
//var floor = Math.floor(dice+1);
//document.write("Random dice value : "+floor);


//        ch # 26 - 30 MATH METHODS TASK 5

//var User1 = "tail";
//var User2 = "head";
//var toss = Math.random()*2;
//var floor = Math.floor(toss);
//if(floor === 0)
//{
//document.write("2 <br> random coin value : "+User2);
//}
//else
//{
//document.write("1 <br> random coin value : "+User1);
//}


//        ch # 26 - 30 MATH METHODS TASK 6

//var num = Math.random()*100+1;
//num=Math.floor(num);
//document.write("<h1>RANDOM NUMBER BETWEEN 1 AND 100 : "+num+"</h1>");

//        ch # 26 - 30 MATH METHODS TASK 7

//var weight = prompt("Enter your weight in kilogram :");
//alert(parseFloat(weight));

//        ch # 26 - 30 MATH METHODS TASK 8

//var num = prompt("enter number between 1 to 10 ");
//var ran =Math.random()*10+1;
//ran=Math.floor(ran);
//if(num === ran)
//{
//alert("Congratulation");
//}
//else{
  //  alert("try again");
//}
//        ch # 26 - 30 MATH METHODS TASK 8

//var num = prompt("enter number between 1 to 10 ");
//var ran =Math.random()*10+1;
//ran=Math.floor(ran);
//if(num === ran)
//{
//alert("Congratulation");
//}
//else{
  //  alert("try again");
//}


//        ch # 31 - 34 DATE METHODS TASK 1

// var currentTime = new Date();
// document.write( currentTime );

//        ch # 31 - 34 DATE METHODS TASK 2

//var date = new Date();
//var months = new Array();
//months[0] = "January";
//months[1] = "February";
//months[2] = "March";
//months[3] = "April";
//months[4] = "May";
//months[5] = "June";
//months[6] = "July";
//months[7] = "August";
//months[8] = "September";
//months[9] = "October";
//months[10] = "November";
//months[11] = "December";
//var currentMonth = months[date.getMonth()];
//document.write(currentMonth);



//        ch # 31 - 34 DATE METHODS TASK 3

// var date = new Date();
// var daysList = ['Sun','MON','Tue','Wed','Thur','Fri','Sat'];
// var currentDay=daysList[date.getDay()];

// document.write("Day is : "+currentDay);


//        ch # 31 - 34 DATE METHODS TASK 4

// var date = new Date();
// var daysList = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
// var currentDay=daysList[date.getDay()];
// if(currentDay === "Sun" || currentDay=== "Sat")
// {
// document.write("It's Fun Day  ");

// }
// else
// {
// document.write("Day is : "+currentDay);

// }



//        ch # 31 - 34 DATE METHODS TASK 5

// var date = new Date();
// var days = date.getDate();
// if (days <= 15 )
// {
// document.write("“First fifteen days of the month");

// }
// else
// {
// document.write("Last days of the month");

// }


//        ch # 31 - 34 DATE METHODS TASK 6


// var currentDate = new Date();
// document.write(currentDate+"</br>");
// var data = new Date(" Jan. 1, 1970");
// var dataTime =data.getTime();
// document.write("Elapsed milli second since jan 1, 1970 : "+dataTime);

//        ch # 31 - 34 DATE METHODS TASK 7





//        ch # 31 - 34 DATE METHODS TASK 8

//var last = new Date("Tue dec 31 2020 00:00:00 GMT+0500 (PKT)");
//document.write(last);


//        ch # 31 - 34 DATE METHODS TASK 9

// var ramdanDate = new Date("june 18, 2015");
// var today = ramdanDate.getDate();
// document.write(today);
// var year= ramdanDate.getFullYear();
// document.write(year);


















//        ch # 35 - 40 FUNCTIONS TASK 1

// function Time() {
//   var now = new Date();
 
//   alert(now);
//  }
//  Time();
  

//        ch # 35 - 40 FUNCTIONS TASK 2

// function greet()
// {
//   var firstName="atiqa";
//   var space=" ";
//   var lastName="Rehmat";
//   alert("Full Name : "+firstName+space+lastName);
// }
// greet();


//        ch # 35 - 40 FUNCTIONS TASK 3

// function sum()
// {
//   var num1 = +prompt("enter number ");
//   var num2 = +prompt("enter number ");
//   var add;
//   add=(num1+num2);
//   alert("Result :"+num1+" + "+num2+" = "+add);

// }
// sum();


//        ch # 35 - 40 FUNCTIONS TASK 4

// function calculator(num1,num2,opp)
// {
//   if(opp === "+")
//   {
//     return num1+num2;
//   }
//   if(opp === "-")
//   {
//     return num1-num2;
//   }
//   if(opp === "*")
//   {
//     return num1*num2;
//   }
//   if(opp === "/")
//   {
//     return num1/num2;
//   }
//   if(opp === "%")
//   {
//     return num1%num2;
//   }
// }

// var result= calculator(3,6,"-");
// document.write(result);



//        ch # 35 - 40 FUNCTIONS TASK 5

// function sqr(num)
// {
// return num*num;
// }
// var result=sqr(4);
// document.write(result);

//        ch # 35 - 40 FUNCTIONS TASK 6

// function factorial(num)
// {
//   var fact=1;
// for(var i=1; i<=num; i++)
// {
//  fact=fact*i;
// }
// return fact;
// }
// var result=factorial(5);
// document.write(result);



//        ch # 35 - 40 FUNCTIONS TASK 7

// function counter()
// {
// var start= +prompt("Enter starting number ");
// var end= +prompt("Enter ending number ");
// for(var i=start; i<=end; i++)
// {
//   document.write(i+"</br>");
// }
// }
// counter();


//        ch # 35 - 40 FUNCTIONS TASK 8





//        ch # 35 - 40 FUNCTIONS TASK 9

// function Area(width,height)
// {
//   var Area=(width*height);
// return Area;
// }
// var result=Area(20,4);
// document.write(result);


//        ch # 35 - 40 FUNCTIONS TASK 10



