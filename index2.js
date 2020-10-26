var array1 = ["red", "orange", "yellow","green", "lightblue", "blue", "gray", "white", "pink"];
var numbers =[1,2,3,4,5,6,7,8,9];

function RandomColor()
{
  var myDiv1=array1[NumberC()];
    document.getElementById("myDiv1").style.backgroundColor = myDiv1;
  var myDiv2=array1[NumberC()];
  document.getElementById("myDiv2").style.backgroundColor =myDiv2;
  var myDiv3=array1[NumberC()];
  document.getElementById("myDiv3").style.backgroundColor = myDiv3;
  var myDiv4=array1[NumberC()];
    document.getElementById("myDiv4").style.backgroundColor = myDiv4;
  var myDiv5=array1[NumberC()];
  document.getElementById("myDiv5").style.backgroundColor =myDiv5;
  var myDiv6=array1[NumberC()];
  document.getElementById("myDiv6").style.backgroundColor =myDiv6;
  var myDiv7=array1[NumberC()];
    document.getElementById("myDiv7").style.backgroundColor = myDiv7;
  var myDiv8=array1[NumberC()];
  document.getElementById("myDiv8").style.backgroundColor = myDiv8;
  var myDiv9=array1[NumberC()];
  document.getElementById("myDiv9").style.backgroundColor = myDiv9;


  var d1 = numbers[NumberC()];
  document.getElementById("s1").innerHTML = d1;
  var d2 = numbers[NumberC()];
  document.getElementById("s2").innerHTML = d2;
  var d3 = numbers[NumberC()];
  document.getElementById("s3").innerHTML = d3;
  var d4 = numbers[NumberC()];
  document.getElementById("s4").innerHTML = d4;
  var d5 = numbers[NumberC()];
  document.getElementById("s5").innerHTML = d5;
  var d6 = numbers[NumberC()];
  document.getElementById("s6").innerHTML = d6;
  var d7 = numbers[NumberC()];
  document.getElementById("s7").innerHTML = d7;
  var d8 = numbers[NumberC()];
  document.getElementById("s8").innerHTML = d8;
  var d9 = numbers[NumberC()];
  document.getElementById("s9").innerHTML = d9;
}
function RandomNumber(){
  var d1 = numbers[NumberC()];
  document.getElementById("s1").innerHTML = d1;
  var d2 = numbers[NumberC()];
  document.getElementById("s2").innerHTML = d2;
  var d3 = numbers[NumberC()];
  document.getElementById("s3").innerHTML = d3;
  var d4 = numbers[NumberC()];
  document.getElementById("s4").innerHTML = d4;
  var d5 = numbers[NumberC()];
  document.getElementById("s5").innerHTML = d5;
  var d6 = numbers[NumberC()];
  document.getElementById("s6").innerHTML = d6;
  var d7 = numbers[NumberC()];
  document.getElementById("s7").innerHTML = d7;
  var d8 = numbers[NumberC()];
  document.getElementById("s8").innerHTML = d8;
  var d9 = numbers[NumberC()];
  document.getElementById("s9").innerHTML = d9;

}
var arraynumber=[];
document.getElementById("myDiv1").addEventListener("mouseover", function()
{
  document.getElementById("s1").style.visibility="hidden";
arraynumber.push(s1.textContent);
if(arraynumber.length==9)
  {
    alert(""+arraynumber);
  }});
document.getElementById("myDiv2").addEventListener("mouseover", function()
{
  document.getElementById("s2").style.visibility="hidden";
arraynumber.push(s2.textContent);
if(arraynumber.length==9)
  {
    alert(""+arraynumber);
  }});
document.getElementById("myDiv3").addEventListener("mouseover", function()
{
  document.getElementById("s3").style.visibility="hidden";
arraynumber.push(s3.textContent);
if(arraynumber.length==9)
  {
    alert(""+arraynumber);
  }});
document.getElementById("myDiv4").addEventListener("mouseover", function()
{
  document.getElementById("s4").style.visibility="hidden";
arraynumber.push(s4.textContent);
if(arraynumber.length==9)
  {
    alert(""+arraynumber);
  }});
document.getElementById("myDiv5").addEventListener("mouseover", function()
{
  document.getElementById("s5").style.visibility="hidden";
arraynumber.push(s5.textContent);
if(arraynumber.length==9)
  {
    alert(""+arraynumber);
  }});
document.getElementById("myDiv6").addEventListener("mouseover", function()
{
  document.getElementById("s6").style.visibility="hidden";
arraynumber.push(s6.textContent);
if(arraynumber.length==9)
  {
    alert(""+arraynumber);
  }}
);document.getElementById("myDiv7").addEventListener("mouseover", function()
{
  document.getElementById("s7").style.visibility="hidden";
arraynumber.push(s7.textContent);
if(arraynumber.length==9)
  {
    alert(""+arraynumber);
  }}
);
document.getElementById("myDiv8").addEventListener("mouseover", function()
{
  document.getElementById("s8").style.visibility="hidden";
arraynumber.push(s8.textContent);
if(arraynumber.length==9)
  {
    alert(""+arraynumber);
  }}
);
document.getElementById("myDiv9").addEventListener("mouseover", function()
{
  document.getElementById("s9").style.visibility="hidden";
arraynumber.push(s9.textContent);
if(arraynumber.length==9)
  {
    alert("The Numbers"+arraynumber);
  }}
);
function NumberC()
{
  var randomNumber1 = Math.floor(Math.random()* 9);
  return randomNumber1;
}
if(arraynumber.length==9)
  {
    alert(""+arraynumber);
  }
