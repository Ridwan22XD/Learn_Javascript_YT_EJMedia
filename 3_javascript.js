// document.write("Now we using external file .js");


// // Function
// function saySomething(){
//     alert("This is a function");
// }
// // call Function
// saySomething(); 


// // Function 
// function addSomething(num,string)
// {
//     var add = num + string;
//     alert(add);
// }
// // call Function 
// addSomething(7," Tutorials has been finish");



// // Operator
// var number1 = 11;
// var number2 = 5;
// var number4 = 4
// var number5 = 2;
// var number6 = 3;
// var number7 = 4;

// document.write(
//     "*********Begin*********","<br>",
//     "Number1 = ",number1,"<br>",
//     "Number2 = ",number2,"<br>",
//     "Number4 = ",number4,"<br>",
//     "Number5 = ",number5,"<br>",
//     "Number6 = ",number6,"<br>",
//     "Number7 = ",number7,"<br>",)

// // number3 = 11 + 5 = 16
// var number3 = number1 + number2;

// // number1 = 11 + 5 = 16
// number1 += number2; 

// // Increment
// // number2 = 5 + 1 = 6
// number2++;

// // Decrement 
// // number4 = 4 - 1 = 3
// number4--;

// document.write(
//     "<br>","*********Update*********","<br>",
//     "Number3 = ",number3,"<br>",
//     "Number1 = ",number1,"<br>",
//     "Number2 increment = ",number2,"<br>",
//     "Number4 decrement = ",number4,"<br>",
//     " Number5 + Number6 * Number7 = ",number5+number6*number7,"<br>");


// // Simple Condition 
// var food = "Mango"

// if(food == "Apple")
// {
//     alert("You have apple");
// }
// else
// {
//     alert("You didn't have apple");
// }


// // Looping --> while 
// var i = 1;

// while(i < 5)
// {
//     document.write("Looping ",i,"<br>");
//     i++;
// }


// // Looping --> for
// for( var i = 1; i < 6; i++)
// {
//     document.write("Looping ",i,"<br>");
// }



// // Function and Condition 
// function battle(player,health)
// {
//     // Condition when health(1 - 10)
//     if(health <= 10 && health > 0)
//     {
//         document.write(player + " Using Skill");
//     }
//     // Condition when health(upper than 10)
//     else if(health > 10)
//     {
//         document.write(player + " Using basic attack");
//     }
//     // when if and if else didn't needed
//     else
//     {
//         document.write(player + " Dead");
//     }
// }
// battle("Steve", 0);


// // Return Statement 
// function add(a, b)
// {
//     result = a + b;
//     return result;
// }
// var theresult = add(6, 7);
// document.write(theresult);


// // Global and Local Variabel
// var name1 = "Loda";     // Global variabel 
// function callName()
// {
//     var name2 = "Admiral";  // Local Variabel 
//     name3 = "Artezy";       // Global Variabel when u call function before print value
// }
// callName();
// document.write(name3);



// // Array
// // index begin from 0 
// var roads = ["Lone", "Gone", "Away", "Go"];

// // call array roads index 1 --> Gone 
// document.write(roads[1]);

// // replace index 1 with value --> Far 
// roads[1] = "Far";

// // print array roads index 1 (new)
// document.write("<br>","<br>",roads[1]);




// Object 
// Real object have multiple property
var orc = 
{
    // Variabel inside object are called --> property
    color: "green",
    height: 5,
    weight: 180,

    // Function inside object are called --> method 
    yell: function() // function yell ()
    {
        document.write("Function inside object");
    }
}
// use . to access an object's property 
document.write(orc.height,"<br>");          //Function inside object
orc.yell();
// replace value object property orc.color (Green --> Red)
orc.color = "Red";
// print orc.color 
document.write("<br>",orc.color,"<br>");    //Red
// delete value object property orc.height
delete orc.height 
// print orc.height
document.write(orc.height,"<br>");          //undifined


