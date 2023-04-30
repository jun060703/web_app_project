const lawBt_R = document.querySelector(".law_bt_R");
const lawBt_L = document.querySelector(".law_bt_L");
const lawUl = document.querySelector(".law_ul");
const lawLi = document.querySelectorAll(".law_ul > li");


let num = 0;
let i = 0;
lawBt_R.addEventListener("click", e => {
  if(i >= 5){num = 0; i=0;}
  else{
    num += -900;
    i++;
  }
  lawUl.style.marginLeft = num + 'px';
});

lawBt_L.addEventListener("click", e => {
  if(i == 0){num = 0; i=0;}
  else{
    num += 900;
    i--;
  };
  lawUl.style.marginLeft = num + 'px';
});





