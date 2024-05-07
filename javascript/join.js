NodeList.prototype.filter = Array.prototype.filter;
NodeList.prototype.map = Array.prototype.map;
const emailInput = document.querySelector('.email');
const emailError = document.querySelector('.email-error');
const pwInput = document.querySelector('.password');
const pwError = document.querySelector('.password-error');
const pwReInput = document.querySelector('.password-re');
const pwReError = document.querySelector('.password-re-error');
const nicknameInput = document.querySelector('.nickname');
const nicknameError = document.querySelector('.nickname-error');
const agreeAll = document.querySelector('input#agree-all');
const terms = document.querySelectorAll('input.term');
const btn = document.querySelector('button[type="submit"]');
const select = document.querySelector('#selector');

// console.log(btn);

// console.log(agreeAll);
// console.log(terms);

// console.log(pwInput);
// console.log(emailError);

let clickCnt = 0;
emailInput.addEventListener('focus', () => {
  if(clickCnt === 0){
    emailInput.style.border = "none";
    emailInput.style.outline = "3px solid skyblue"
    emailError.style.display = "none";
  }
  clickCnt++;
  // if(emailInput.value === ""){
  //   emailInput.style.border = "none";
    
  //   emailError.style.display = "none";
  // }
  // console.log(clickCnt);
});

emailInput.addEventListener('blur', () => {
  // console.log(emailError);
    // console.log(emailInput.value);
    // this.value = value;
    if(emailInput.value === ""){
      // console.log(emailInput.value);
      emailError.style.display = "block";
      emailInput.style.outline = "3px solid red";
      emailInput.addEventListener('focus', ()=>{
        if(emailInput.value === ""){
        emailInput.style.outline = "3px solid red";
        // emailInput.style.border = "1px solid ";
        }
        // emailInput.style.outline = "3px solid red";
      });

      // btn.style.style.color = "white";
      // btn.style.style.backgroundcolor = "skyblue";
    }else{
      // emailInput.addEventListener('blur', () => {
      //   emailInput.style.outline = "3px solid skyblue";
      // });
      emailInput.addEventListener('keypress', () => {
        emailInput.style.outline = "3px solid skyblue";
      });
      emailInput.addEventListener('blur', () =>{
        emailInput.style.outline = "3px solid skyblue";
        if(emailInput.value === "" && select.value == "none"){
          select.style.border = "none";
          select.style.outline = "1px solid red";
          // console.log(select);
          emailInput.style.outline = "2px solid red";
        }else if(emailInput.value === "" && select.value != "none"){
          emailInput.style.outline = "3px solid red";
          select.style.border = "1px solid black";
        }
      })
      select.style.border = "1px solid black";
      select.style.outline = "none";
      emailError.style.display = "none";
      emailInput.style.border = "none";
    }
});

emailInput.addEventListener('keypress', () => {
  console.log(select.value);
  if(emailInput.value !== "" && select.value != "none"){
    btn.style.color = "white";
    btn.style.backgroundColor = "skyBlue"
    emailInput.style.outline = "3px solid red";
  }else{
    btn.style.backgroundColor = "rgb(220, 217, 217)";
    btn.style.color = "rgb(177, 171, 171)";

  }
})

// function changeBtn(){
//   if(emailInput.value !== ""){
//     btn.style.color = "white";
//     btn.style.backgroundColor = "skyBlue"
//   }
// }

// changeBtn();
let clickCntPw = 0;
pwInput.addEventListener('focus', () => {
  if(clickCntPw === 0){
    pwInput.style.border = "none";
    pwInput.style.outline = "3px solid skyblue"
    pwError.style.display = "none";
    console.log(clickCntPw);
  }
  clickCntPw++;
});

pwInput.addEventListener('blur', () => {
    if(pwInput.value === ""){
      // console.log(pwInput.value);
      pwInput.style.outline = "none";
      pwError.style.display = "block";
      pwInput.style.border = "1px solid red";
      pwInput.addEventListener('focus', () => {
        pwInput.style.outline = "3px solid red";
      })
    }else{
      pwError.style.display = "none";
      pwInput.style.border = "1px solid black";
      pwInput.addEventListener('focus', () => {
        pwInput.style.outline = "3px solid skyblue";
        pwInput.style.border = "none";
      })
      pwInput.style.outline = "none";
    }
});


let clickCntPwRe = 0;
pwReInput.addEventListener('focus', () => {
  if(clickCntPwRe === 0){
    pwReInput.style.border = "none";
    pwReInput.style.outline = "3px solid skyblue"
    pwReError.style.display = "none";
    console.log(clickCntPwRe);
  }
  clickCntPwRe++;
});

pwReInput.addEventListener('blur', () => {
    if(pwReInput.value === ""){
      // console.log(pwInput.value);
      pwReInput.style.outline = "none";
      pwReError.style.display = "block";
      pwReInput.style.border = "1px solid red";
      pwReInput.addEventListener('focus', () => {
        pwReInput.style.outline = "3px solid red";
      })
    }else{
      pwReError.style.display = "none";
      pwReInput.style.border = "1px solid black";
      pwReInput.addEventListener('focus', () => {
        pwReInput.style.outline = "3px solid skyblue";
        pwReInput.style.border = "none";
      })
      pwReInput.style.outline = "none";
    }
});


let clickCntNick = 0;
nicknameInput.addEventListener('focus', () => {
  if(clickCntPwRe === 0){
    nicknameInput.style.border = "none";
    nicknameInput.style.outline = "3px solid skyblue"
    nicknameError.style.display = "none";
    console.log(clickCntNick);
  }
  clickCntNick++;
});

nicknameInput.addEventListener('blur', () => {
    if(nicknameInput.value === ""){
      // console.log(pwInput.value);
      nicknameInput.style.outline = "none";
      nicknameError.style.display = "block";
      nicknameInput.style.border = "1px solid red";
      nicknameInput.addEventListener('focus', () => {
        nicknameInput.style.outline = "3px solid red";
      })
    }else{
      nicknameError.style.display = "none";
      nicknameInput.style.border = "1px solid black";
      nicknameInput.addEventListener('focus', () => {
        nicknameInput.style.outline = "3px solid skyblue";
        nicknameInput.style.border = "none";
      })
      nicknameInput.style.outline = "none";
    }
});

// textInput.forEach((input) => {
//   input.addEventListener('blur', () =>{
//     console.log(input.value);
//     if(input[i].value === ""){
//       for(let i = 0; i < textError.length; i++){
//         // console.log(textError[i]);
//         textError[i].style.display = "block";      
//       }
//       // textError.forEach((error) => {
//       //   error[i].style.display = "block";
//       //   input[i].style.border = "1px solid red";
//       // })
//     }
//   });
// });

agreeAll.addEventListener('click' , () =>{
  terms.forEach((term) => {
    term.checked = agreeAll.checked;
  })
});

terms.forEach((term) => {
  term.addEventListener('click', (e) => {
    agreeAll.checked = terms.map((term) => term.checked).filter((checked) => checked).length === 5; 
  });
});






