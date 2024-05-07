let main1SlideBox = document.querySelector('.main1-slide-box');
let main1SlideImg = document.querySelectorAll('.main1-div2-img');
let main1Prev = document.querySelector('#main1-prev');
let main1Next = document.querySelector('#main1-next');


// console.log(main1SlideBox);
// console.log(main1SlideImg);
// console.log(main1Next);
// console.log(main1Prev);

let main1slideWidth = 310;
let main1currentIdx = 0;
let main1slideCnt = main1SlideImg.length;

main1Next.addEventListener('click', () => {
  // console.log(main1Next);
  main1currentIdx++;
  main1SlideBox.style.left= -(main1currentIdx * main1slideWidth) + "px";
  main1SlideBox.style.transition = "0.5s ease";
  main1checkEnd();
});

main1Prev.addEventListener('click', () => {
  main1currentIdx--;
  main1SlideBox.style.left = -(main1currentIdx * main1slideWidth) + "px";
  main1SlideBox.style.transition = "0.5s ease";
  main1checkEnd();
})

function main1checkEnd(){
  if(main1currentIdx <= 0){
    main1Prev.style.display = 'none';
  }else{
    main1Prev.style.display = 'block';
  }

  if(main1currentIdx >= main1slideCnt - 1){
    main1Next.style.display = 'none';
  }else{
    main1Next.style.display = 'block';
  }
}

let main3ImgBox = document.querySelectorAll('.main3-img-container');
let main3Prev = document.querySelector('.main3-left-slider-btn');
let main3Next = document.querySelector('.main3-right-slider-btn');
let main3Slidebox = document.querySelector('.main3-div2-img-box');

// console.log(main3ImgBox);
// console.log(main3Next);


let main3Imgs = main3ImgBox.length;
let main3MoveCnt = 0;
let main3ImgWidth = 200;

main3Next.addEventListener('click', () => {
  // console.log(main1Next);
 main3Slidebox.style.left= -(main3MoveCnt * main3ImgWidth) + "px";
  main3Slidebox.style.transition = "0.5s ease"; main3MoveCnt++;
  
  // main1checkEnd();
  main3checkEnd();
});

main3Prev.addEventListener('click', () => {
  // console.log(main1Next);
  main3MoveCnt--;
  main3Slidebox.style.left= -(main3MoveCnt * main3ImgWidth) + "px";
  main3Slidebox.style.transition = "0.5s ease";
  // main1checkEnd();
  main3checkEnd();
});

function main3checkEnd(){
  if(main3MoveCnt <= 0){
    main3Prev.style.display = 'none';
  }else{
    main3Prev.style.display = 'block';
  }

  if(main3MoveCnt > main3Imgs - 6){
    main3Next.style.display = 'none';
  }else{
    main3Next.style.display = 'block';
  }
}

let main6SlideImg = document.querySelector('.main6-2-ul');
let main6ImgBox = document.querySelectorAll('.main6-2-list');
let main6Prev = document.querySelector('.main6-left-slider-btn');
let main6Next = document.querySelector('.main6-right-slider-btn');

// console.log(main6ImgBox);
// console.log(main6Next);
// console.log(main6Prev);
// console.log(main6SlideImg);

let main6Idx = 0;
let main6Cnt = main6ImgBox.length;
let main6Width = 50;

main6Next.addEventListener('click', () => {
  // console.log(main1Next);
  main6Idx++;
  main6SlideImg.style.left= -(main6Idx * main6Width) + "px";
  main6SlideImg.style.transition = "0.5s ease"; 
  
  main6checkEnd(); 
  
});

main6Prev.addEventListener('click', () => {
  // console.log(main1Next);
  main6Idx--;
  main6SlideImg.style.left= -(main6Idx * main6Width) + "px";
  main6SlideImg.style.transition = "0.5s ease";
  main6checkEnd();
  
});

function main6checkEnd(){
  if(main6Idx <= 0){
    main6Prev.style.display = 'none';
  }else{
    main6Prev.style.display = 'block';
  }

  if(main6Idx > main6ImgBox.length - 10){
    main6Next.style.display = 'none';
  }else{
    main6Next.style.display = 'block';
  }
};



let main10SlideImg = document.querySelector('.main10-2-ul');
let main10ImgBox = document.querySelectorAll('.main10-check-div');
let main10Prev = document.querySelector('.main10-left-slider-btn');
let main10Next = document.querySelector('.main10-right-slider-btn');
const main10firstLi = document.querySelector('#main-div-list-1');


// for(let i = 0; i < main10ImgBox.length; i++){
//   main10ImgBox[i].addEventListener('click', () =>{
//     main10ImgBox[i].style.backgroundColor = 'skyblue';
//     main10firstLi.style.backgroundColor = 'rgb(252, 248, 248)';
//   })
// }

function clickList(e){
  main10ImgBox.forEach((img) =>{
    img.classList.remove("click-skyblue");
  });
  e.target.classList.add('click-skyblue');
  main10firstLi.style.backgroundColor = 'rgb(252, 248, 248)';
}

main10ImgBox.forEach((img) =>{
  img.addEventListener('click', clickList);
  main10firstLi.addEventListener('click', () =>{
    main10firstLi.style.backgroundColor = 'skyblue';
  });
});

// console.log(main10firstLi);

let main10Idx = 0;
let main10Cnt = main10ImgBox.length;
let main10Width = 60;

main10Next.addEventListener('click', () => {
  // console.log(main1Next);
  main10Idx++;
  main10SlideImg.style.left= -(main10Idx * main10Width) + "px";
  main10SlideImg.style.transition = "0.5s ease"; 
  
  main10checkEnd(); 
  
});

main10Prev.addEventListener('click', () => {
  // console.log(main1Next);
  main10Idx--;
  main10SlideImg.style.left= -(main10Idx * main10Width) + "px";
  main10SlideImg.style.transition = "0.5s ease";
  main10checkEnd();
  
});

function main10checkEnd(){
  if(main10Idx <= 0){
    main10Prev.style.display = 'none';
  }else{
    main10Prev.style.display = 'block';
  }

  if(main10Idx > main10ImgBox.length - 12){
    main10Next.style.display = 'none';
  }else{
    main10Next.style.display = 'block';
  }
}

// console.log(main10ImgBox);
// console.log(main10SlideImg);

// main3Next.addEventListener('click', () =>{
//   // console.log(main3ImgBsox);
//   main3ImgBox.forEach((img) => {
//     main3MoveCnt++;
//     img.style.left= -(main3MoveCnt * main3MoveRange) + "px";
//     img.style.transition = "0.5s ease";
//     // main3checkEnd();
//     if(img.style.left >= 400){
//       main3Next.style.display = 'none';
//     }else{
//       main3Next.style.display = 'block';
//     }
//   })
// });

// main3Prev.addEventListener('click', () =>{
//   main3ImgBox.forEach((img) => {
//     main3MoveCnt--;
//     // img.style.left = -(main3MoveCnt * main3MoveCnt) + "px";
//     img.style.left= -(main3MoveCnt * main3MoveRange) + "px";
//     img.style.transition = "0.5s ease";
//     // main3checkEnd();
//     if(img.style.left <= 20){
//       main3Prev.style.display = 'none';
//     }else{
//       main3Prev.style.display = 'block';
//     }
//   })
// })
