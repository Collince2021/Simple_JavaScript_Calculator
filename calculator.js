				
						const num1=parseFloat(window.prompt("Enter first number:"));
const operator=window.prompt("Enter operator:");
const num2=parseFloat(window.prompt("Enter second number"));
var results;
 if (operator==="+")
   results=num1+num2;
 else if (operator==="-")
     results=num1-num2;
 else if (operator ==="*")
     results=num1*num2;
 else if (operator ==="/")
     results=num1/num2;
  alert(`${num1} ${operator} ${num2}= ${results}`);
		