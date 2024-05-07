const firstModal = document.querySelector('.header-div2-modal');
const firstMoreBtn = document.querySelector('.header-morebutton-div');

// console.log(firstModal);
// console.log(firstMoreBtn);

firstMoreBtn.addEventListener('click', () =>{
  firstModal.style.visibility = 'visible';
});

firstModal.addEventListener('mouseleave', () =>{
  firstModal.style.visibility = 'hidden';
});

const secondMoreBtn = document.querySelector('.morebtn');
const secondModal = document.querySelector('.header-div2-rank');

// console.log(secondMoreBtn);
// console.log(secondModal);

secondMoreBtn.addEventListener('click', () =>{
  secondModal.style.visibility = 'visible';
});

secondModal.addEventListener('mouseleave', () =>{
  secondModal.style.visibility = 'hidden';
});
