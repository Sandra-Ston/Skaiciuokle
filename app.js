const count = document.querySelector(".count");
const subtract = document.querySelector(".subtract");
const reset = document.querySelector(".reset");
const add = document.querySelector(".add");


add.addEventListener("click",function(){

    count.textContent++ //prideda viena
    setColor();
     
});

subtract.addEventListener("click",function(){

    count.textContent-- //atima viena
    setColor();
     
});

reset.addEventListener("click", function(){
    count.textContent = 0
    setColor();
})

document.addEventListener("keydown", (e) => { //galima valdyti su klaviatura
    if (e.key === "ArrowUp") count.textContent++;
    if (e.key === "ArrowDown") count.textContent--;
    if (e.key === "0") count.textContent = 0
    setColor();
  });

 



  function setColor() {
    const value = parseInt(count.textContent);
    if (value > 0) {
        count.style.color = "#DEA54B";
    } else if (value < 0) {
        count.style.color = "#D741A7";
    } else {
        count.style.color = "#FFFEFF";
    }
};