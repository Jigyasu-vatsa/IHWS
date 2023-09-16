function cnf() {
  let chk = prompt(usrnm.value , pwd.value);
}





/* if (chk == null) {
    window.location.reload();
  }
*/






 
function flaga(){ 
if(usrnm.value=="" || pwd.value==""){ 
f() 
document.getElementById("usrnm").style.border="5px solid red" 
document.getElementById("pwd").style.border="5px solid red" 
bt.value="Insert Value First" 
} 
else{ 
document.getElementById("usrnm").style.border="5px solid green" 
document.getElementById("pwd").style.border="5px solid green" 
bt.value="Now Press Submit" 
bt.style.left="46.7%"; 
} 
} 
flag=1 
function f(){ 
if(flag==1){ 
bt.style.left="32%"
flag=2
}
else if(flag==2){ 
bt.style.left="60%" 
flag=1 
} 
} 

