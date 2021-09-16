function product() 
{ 
  var temp=document.getElementById('num1').value;
  if (temp > 999 && temp < 10000 && !isNaN(temp) && Number.isInteger(Number(temp)))	  
    {		  
			let arr = document.getElementById('num1').value.split('');
			let num = Number(arr[0]*arr[1]*arr[2]*arr[3]);
			document.getElementById("rez1").value = num;
	  
	}  	  
		else alert("Введите четырехзначное целое число!");	 				
}		
