alert('My Calculator Task');
var opr = prompt("Choose an operator(+, -, *, /) ");
var num1 = prompt("Enter your first number: ");
var num2 = prompt("Enter your second number: ");

if (opr == "+") 
{
    prompt(Number(num1) + Number(num2))
} else if (opr == "-")
{
    prompt(Number(num1) - Number(num2))
} else if (opr == "*")
{
    prompt(Number(num1) * Number(num2))
} else if (opr == "/")
{
    prompt(Number(num1) / Number(num2))
}