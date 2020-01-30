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




// // Object 
// // Real object have multiple property
// var orc = 
// {
//     // Variabel inside object are called --> property
//     color: "green",
//     height: 5,
//     weight: 180,

//     // Function inside object are called --> method 
//     yell: function() // function yell ()
//     {
//         document.write("Function inside object");
//     }
// }
// // use . to access an object's property 
// document.write(orc.height,"<br>");          //Function inside object
// orc.yell();
// // replace value object property orc.color (Green --> Red)
// orc.color = "Red";
// // print orc.color 
// document.write("<br>",orc.color,"<br>");    //Red
// // delete value object property orc.height
// delete orc.height 
// // print orc.height
// document.write(orc.height,"<br>");          //undifined



// // String

// var hello = "This is a string";
// // uppercase method
// hello = hello.toUpperCase(); //THIS IS A STRING
// // print variabel hello 
// document.write(hello,"<br>");

// hello = "This is a string";
// //lowercase method
// hello = hello.toLowerCase(); //this is a string
// // print variabel hello 
// document.write(hello,"<br>");

// hello = "This is a string";
// //bold method
// hello = hello.bold();        //This is a string --> bold
// // print variabel hello 
// document.write(hello,"<br>");

// hello = "This is a string";
// // specify the text where index 6
// hello = hello.charAt(6);     //s  --> 0=T, 1=h, 2=i, 3=s, etc....
// // print variabel hello 
// document.write(hello,"<br>");




// // Math Object 
// var number = 7.8;
// var number1 = 7.4;

// // Method to Math.round (if < 0.5 --> 0 and if >= 0.5 --> 1)
// numbera = Math.round(number);
// numberb = Math.round(number1);

// // print
// document.write("Math.round","<br>");
// document.write("rounded ", number," --> ",numbera, "<br>");
// document.write("rounded ", number1," --> ",numberb, "<br>", "<br>");

// number = 7.8;
// number1 = 7.4;
// // Method to Math.ceil (every desimal will be upper value)
// numbera = Math.ceil(number);
// numberb = Math.ceil(number1);

// // print
// document.write("Math.ceil","<br>");
// document.write("ceil ", number," --> ",numbera, "<br>");
// document.write("ceil ", number1," --> ",numberb, "<br>", "<br>");

// number = 7.8;
// number1 = 7.4;
// // Method to Math.floor (every desimal will be upper value)
// numbera = Math.floor(number);
// numberb = Math.floor(number1);

// // print
// document.write("Math.floor","<br>");
// document.write("floor ", number," --> ",numbera, "<br>");
// document.write("floor ", number1," --> ",numberb, "<br>");




// // Date Object 
// // call date according your date with time and timezone
// var todayDate = new Date(); 
// document.write(todayDate,"<br>");   // Wed Jan 29 2020 09:46:06 GMT+0700 (Western Indonesia Time)

// // call date according your date without time and timezone
// var usingString = todayDate.toDateString();
// document.write(usingString,"<br>"); // Wed Jan 29 2020

// // just call year according your year
// var getFullYear = todayDate.getFullYear();
// document.write(getFullYear,"<br>"); // 2020

// // set year as you want
// todayDate.setYear(2012);
// document.write(todayDate);  // Sun Jan 29 2012 10:02:14 GMT+0700 (Western Indonesia Time)




// function changeStyle()
// {
//     // call all paragraph (<p>)
//     var paragraph = document.getElementsByTagName("p");
//     for(var i = 0; i<paragraph.length; i++)
//     {
//         // style paragraph according index 
//         paragraph[i].style.color="Blue";
//     }
// }

// function reset()
// {
//     // call all paragraph (<p>)
//     var paragraph = document.getElementsByTagName("p");
//     for(var i = 0; i<paragraph.length; i++)
//     {        
//         // style paragraph according index 
//         paragraph[i].style.color="black";
//     }
// }



// getElemenstByClassName

// function changeStyle()
// {
//     // call all class where name class = "parag"
//     var paragr = document.getElementsByClassName("parag");
//     for(var i = 0; i<paragr.length; i++)
//     {
//         // style paragraph according index 
//         paragr[i].style.color="Blue";
//     }
// }

// function reset()
// {
//     // call all class where name class = "parag"
//     var paragr = document.getElementsByClassName("parag");
//     for(var i = 0; i<paragr.length; i++)
//     {        
//         // style paragraph according index 
//         paragr[i].style.color="black";
//     }
// }




// // Replace content using innerHtml
// function changeStyle()
// {
//     // call all paragraph are className = parag 
//     var paragraph = document.getElementsByClassName("parag");
//     // Looping to create new paragraph 
//     for(var i = 0; i < paragraph.length; i++)
//     {
//         var changeText = paragraph[i].innerHTML = "New paragraph " + (i+1);
//     }
// }




// // Add and merge using innerHtml
// function changeStyle()
// {
//     // call all paragraph are className = parag 
//     var paragr = document.getElementsByClassName("parag");

//     // inisialisation variabel to merge variabel
//     var firstText = paragr[0].innerHTML;
//     var secondText = paragr[1].innerHTML;

//     // create place and field with merge variabel
//     var merge = paragr[3].innerHTML = firstText + " " + secondText;

//     // to set just print index 3
//     paragr[0].innerHTML = " ";
//     paragr[1].innerHTML = " ";
//     paragr[2].innerHTML = " ";
    
// }




// // Change image using javascripts function
// function changeStyle()
// {
//     // Find Element where id = "image" and replace source = "images/MBP-Pink.jpeg"
//     document.getElementById("image").src = "images/MBP-Pink.jpeg";
// }

// function reset()
// {
//     // Find Element where id = "image" and replace source = "images/MBP-Gold.jpeg"
//     document.getElementById("image").src = "images/MBP-Gold.jpeg";
// }




// // Mouseover
// function changeImage()
// {
//     document.getElementById("image").src = "images/MBP-Pink.jpeg";
// }
// function defaultImage()
// {
//     document.getElementById("image").src = "images/MBP-Gold.jpeg";
// }


// // Create a new element 
// function newStory()
// {
//                 // Heading 

//     // Create variabel (element) -> paragraph (<h2>)
//     var elementH = document.createElement("h2");

//     // Create variabel (main)
//     // Set variabel (main) according id (main)
//     var main = document.getElementById("main");

//     // Put in variabel -> elementH inside child variabel -> main
//     main.appendChild(elementH);

//     // Create node for textH
//     // Set text with string -> "Apollo :: Greek God of the Sun and Light"
//     var textH = document.createTextNode("Apollo :: Greek God of the Sun and Light");

//     // Put in variabel -> textH inside child variabel -> elementH 
//     elementH.appendChild(textH);
//                 // Paragraph

//     // Create variabel (element) -> paragraph (<p>)
//     var element = document.createElement("p");

//     // Put in variabel -> element inside child variabel -> main
//     main.appendChild(element);

//     // Create node for text 
//     // Set text with string -> "Test"
//     var text = document.createTextNode("Apollo is the Olympian god of the sun and light, music and poetry, healing and plagues, prophecy and knowledge, order and beauty, archery and agriculture. An embodiment of the Hellenic ideal of kalokagathia, he is harmony, reason and moderation personified, a perfect blend of physical superiority and moral virtue. A complex deity who turns up in art and literature possibly as often as Zeus himself, Apollo is the only major god who appears with the same name in both Greek and Roman mythology.");

//     // Put in variabel -> text inside child variabel -> element 
//     element.appendChild(text);

//     // Skema
//     // div  ->  h2  ->  p       ->  text
//     // main ---------> element  ->  test  
// }

// function hideStory()
// {
//     // Create variabel -> elementH
//     // Find element by tag <h2> and index 2(index begin from 0)
//     var elementH = document.getElementsByTagName("h2")[2];

//     // Create variabel -> parent
//     //  Variabel parent is parent from elementH  
//     var parent = elementH.parentNode;
    
//     // Remove child from parent -> elementH 
//     parent.removeChild(elementH);

//     // Create variabel -> elementP
//     // Find element by tag <p> and index 4(index begin from 0)
//     var elementP = document.getElementsByTagName("p")[4];
//     parent.removeChild(elementP)
// }




                // Traversing DOM
// Parent to child
function changeParagraph()
{
    // Declare Variabel parent 
    // filled variabel parent according element with id = "main" 
    var parent = document.getElementById("main");

    // Declare variabel child 
    // Filled variabel child according last element child from variabel parent 
    var child = parent.lastElementChild;

    // coloring blue variabel child 
    child.style.color = "blue";
}
// Child to parent
function changeAllParagraph()
{
    // Declare variabel child 
    // Filled variabel child according element with id = "p1"
    var child = document.getElementById("p1");

    // Declare variabel parent 
    // Filled variabel parent according parent Element from variabel child
    var parent = child.parentElement;

    // Coloring red variabel parent
    parent.style.color = "red";
}
// Between sibling element
function betweenSibling()
{
    // Declare variabel paragraph1
    // Filled variabel paragraph1 according element with id = "p1"
    var paragraph1 = document.getElementById("p1");

    // Declare variabel sibling 
    // Filled variabel sibling according next element sibling from variabel paragraph1
    var sibling = paragraph1.nextElementSibling;

    // Coloring yellow sibling
    sibling.style.color = "yellow";
}


function reset()
{
                // Reset Style All Element
    // Declare variabel child 
    // Filled variabel child according Element with id = "p1"
    var child = document.getElementById("p1");

    // Declare variabel parent
    // Filled variabel parent according parent element from variabel child
    var parent = child.parentElement;

    // Coloring Black element
    parent.style.color = "Black";

                // Reset Style Last paragraph
    // Declare variabel parent
    // Filled variabel parent according element with id = "main"
    var parent = document.getElementById("main");

    // Decalare variabel child
    // Filled variabel child according last element child from variabel parent
    var child = parent.lastElementChild;

    // Coloring black child
    child.style.color = "black";

    // Declare variabel paragraph1
    // Filled variabel paragraph1 according element with id = "p1"
    var paragraph1 = document.getElementById("p1");

    // Declare variabel sibling 
    // Filled variabel sibling according next element sibling from variabel paragraph1
    var sibling = paragraph1.nextElementSibling;

    // Coloring black sibling
    sibling.style.color = "black";

    // Delete variabel (child, parent, paragraph1, sibling)
    delete(child);
    delete(parent);
    delete(paragraph1);
    delete(sibling);
}