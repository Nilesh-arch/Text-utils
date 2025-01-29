let inpt = document.getElementsByTagName("input")[0];
let button = document.getElementsByTagName("button");
let prvpara = document.getElementById("prvpara");
let words = document.getElementById("wrd");
let character = document.getElementById("ch");
console.log(words, ch);
console.log(prvpara);
let arr = Array.from(button);
let [theme, ...btnarr] = arr;


theme.addEventListener('click',()=>
{
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    theme.innerHTML = `<i class="fa-solid fa-toggle-on"></i> `; 
} else {
    theme.innerHTML = `<i class="fa-solid fa-toggle-off"></i>`; 
}
})

inpt.addEventListener("keyup", (e) => {
  let c = 0;
  
  for (let l = 0; l < inpt.value.length; l++) {
    let ch = inpt.value.charAt(l);
    if (ch !== " ") {
      c++;
    }
  }
   let wor=inpt.value.trim();
   let arrwor=wor.split(' ')
   let filter=arrwor.filter((el)=>
  {
    return el!=''
  })
  
  words.innerHTML=filter.length
  character.innerHTML = c;
  prvpara.innerHTML = inpt.value;
});

btnarr.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML == "UpperCase") {
      prvpara.innerHTML = inpt.value.toUpperCase();
    } else if (e.target.innerHTML === "LowerCase") {
      prvpara.innerHTML = inpt.value.toLowerCase();
    } else if (e.target.innerHTML === "Reset") {
      let flag = confirm("Do you want to Reset!");
      if (flag) inpt.value = "";
      prvpara.innerHTML = "";
      character.innerHTML = "0";
      words.innerHTML="0";
    }
    else if(e.target.innerHTML === "Reverse")
      {
        let rev=""
        for(let z=inpt.value.length-1;z>=0;z--)
        {
            let ch=inpt.value.charAt(z)
            rev=rev+ch
        }
        prvpara.innerHTML=rev
      }
      else
      {
        let copy = document.getElementById("prvpara").innerText; 
        alert(`The Copied Text is "${copy}"`); 
        navigator.clipboard.writeText(copy);
      }
  })
 
});
