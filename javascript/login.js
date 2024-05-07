
const inputs = document.querySelectorAll('.input');
// const pwInput = document.querySelector('.password');
const errorMsg = document.querySelector('.login-error');
const emailInput = document.querySelector('#eMail');
const pwInput = document.querySelector('#passWord');

console.log(emailInput);
console.log(pwInput);
// console.log(inputs);
// console.log(errorMsg);




let clickCnt = 0;
emailInput.addEventListener('focus', () => {
  if(clickCnt === 0){
    emailInput.style.border = "none";
    emailInput.style.outline = "3px solid skyblue";
    pwInput.style.borderTop = "3px solid skyblue";
    emailError.style.display = "none";
  }
  clickCnt++;
  // pwInput.style.borderTop = "none";
});

emailInput.addEventListener('blur', () => {
  pwInput.style.borderTop = "none";
  if(emailInput.value === ""){
    // console.log(pwInput.value);
    emailInput.style.outline = "none";
    errorMsg.style.display = "block";
    emailInput.style.border = "1px solid red";
    emailInput.addEventListener('focus', () => {
      emailInput.style.outline = "3px solid red";
      pwInput.style.borderTop = "3px solid red";
    })
  }else{
    errorMsg.style.display = "none";
    emailInput.style.border = "1px solid black";
    emailInput.addEventListener('focus', () => {
      emailInput.style.outline = "3px solid skyblue";
      pwInput.style.borderTop = "3px solid skyblue";
      emailInput.style.border = "none";
    })
    emailInput.style.outline = "none";
  }
});

let clickCntPw = 0;
pwInput.addEventListener('focus', () => {
  if(clickCntPw === 0){
    pwInput.style.border = "none";
    pwInput.style.outline = "3px solid skyblue"
    errorMsg.style.display = "none";
    console.log(clickCntPw);
  }
  clickCntPw++;
});

pwInput.addEventListener('blur', () => {
  if(pwInput.value === ""){
    // console.log(pwInput.value);
    pwInput.style.outline = "none";
    errorMsg.style.display = "block";
    pwInput.style.border = "1px solid red";
    pwInput.addEventListener('focus', () => {
      pwInput.style.outline = "3px solid red";
    })
  }else{
    errorMsg.style.display = "none";
    pwInput.style.border = "1px solid black";
    pwInput.addEventListener('focus', () => {
      pwInput.style.outline = "3px solid skyblue";
      pwInput.style.border = "none";
    })
    pwInput.style.outline = "none";
  }
});



// for(let i = 0; i < inputs.length; i++){
  
// }
// emailInput.addEventListener('blur', () => {
//   if(emailInput.value === ""){
//     console.log(emailInput.value);
//     errorMsg.style.display = "block";
//     emailInput.style.border = "1px solid red";
//   }else{
//     errorMsg.style.display = "none";
//     emailInput.style.border = "1px solid black";
//   }
// });


// pwInput.addEventListener('blur', () => {
//     if(pwInput.value === ""){
//       console.log(pwInput.value);
//       errorMsg.style.display = "block";
//       pwInput.style.border = "1px solid red";
//     }else{
//       errorMsg.style.display = "none";
//       pwInput.style.border = "1px solid black";
//     }
// });