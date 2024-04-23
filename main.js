
const add = document.querySelector("#add");
const check = document.querySelector("#check");

const message = document.querySelector(".message")


add.addEventListener('click', () => {
  
  if (add.innerText === "Add Friend") {
      add.innerHTML=check.innerHTML;
      add.style.backgroundColor="black";
      add.style.color="white";
      message.style.backgroundColor="dodgerblue"
      message.style.color="white";
      
  }
  else {
    add.innerHTML=  "Add Friend"
    add.style.fontWeight="bold"
    add.style.backgroundColor="dodgerblue";
    add.style.color="white";
    message.style.backgroundColor="white"
      message.style.color="black";
      
  }
  
})





