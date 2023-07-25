var a=[];
var size=prompt("enter size of array");
for(let i=0;i<size;i++)
{
	a[i]=prompt("enter the array value");
}
document.write("The array values are:&nbsp;"+a+"<br>");
console.log(a);
var b=[];
a.sort();
let temp;
let c=[];
for(let i=0;i<a.length;i++)
{
	
	if(a[i]!==temp)
	{
		b.push(a[i]);
		 temp=a[i];
	}
	else
	{
		c.push(a[i]);
	}
}
document.write("original numbers are:&nbsp;"+b+"<br>");
console.log(b);
document.write("duplicate number are:&nbsp;"+c+"<br>");
console.log(c);