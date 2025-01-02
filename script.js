function firstWord(str) {
  // your code here
	
let newstr=""
for(let i=0;i<str.length;i++)
{
    if(str.charAt(i)==" ")
    {
        break;
    }
    else
    {
        newstr+=str.charAt(i)
    }
}
return newstr 
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
