// 생활코딩 자료
// $('.list').click(function(e){
//     console.log(e.target.dataset.id);
//     open(e.target.dataset.id)
// })

// function open(num){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(num).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(num).addClass('show');
// }


//for 반복문 쓰는법
// for 문법은 반복 실행


// for (let i = 0; i<3; i++ ){
//     $('.tab-button').eq(i).on('click', function(){
//         탭열기(i)
//     })
// }

// console.log('dkssud');
 
// for(let i = 0; i<3; i++){
//     document.querySelectorAll('.tab-button')[i].addEventListener('click', function(){
//         open(i);
//     })   
// }

// document.querySelector('.list').addEventListener('click', function(e){
//     open(e.target.dataset.id);
// })

// function open(e){
//     document.querySelectorAll('.tab-button').classList.remove('orange');
//     document.querySelectorAll('.tab-button')[0].classList.add('orange');
//     document.querySelectorAll('.tab-content').classList.remove('show');
//     document.querySelectorAll('.tab-content')[0].classList.add('show');
// }


// document.querySelectorAll('.tab-button')[0].addEventListener('click', function(){
//     // 모든 'tab-button' 요소들을 가져옵니다.
//     // const tabButtons = document.querySelectorAll('.tab-button');
//     // const tabContents = document.querySelectorAll('.tab-content');

//     // tabButtons.classList.remove('.orange');
//     // tabButtons[0].classList.add('.orange');
//     // tabContents.classList.remove('.show');
//     // tabContents[0].classList.add('.show');

//     document.querySelector('.tab-button').classList.remove('orange');
//     document.querySelectorAll('.tab-button')[0].classList.add('orange');
//     document.querySelector('.tab-content').classList.remove('show');
//     document.querySelectorAll('.tab-content')[0].classList.add('show');
// })



// document.querySelectorAll('.tab-button')[0].addEventListener('click', function(){
//     document.querySelector('.tab-button').classList.remove('orange');
//     document.querySelectorAll('.tab-button')[0].classList.add('orange');
//     document.querySelector('.tab-content').classList.remove('show');
//     document.querySelectorAll('.tab-content')[0].classList.add('show');
// })

// document.getElementsByClassName('.tab-button')[0].addEventListener('click', function(){
//     document.getElementsByClassName('.tab-button').classList.remove('orange');
//     document.getElementsByClassName('.tab-button')[0].classList.add('orange');
//     document.getElementsByClassName('.tab-content').classList.remove('show');
//     document.getElementsByClassName('.tab-content')[0].classList.add('show');
// })

// document.querySelectorAll('.tab-button')[0].addEventListener('click', function() {
//     // 모든 'tab-button' 요소들을 가져옵니다.
//     const tabButtons = document.querySelectorAll('.tab-button');
    
//     // 모든 'tab-button' 요소들에서 'orange' 클래스를 제거합니다.
//     tabButtons.forEach(function(button) {
//         button.classList.remove('orange');
//     });

//     // 클릭된 'tab-button' 요소에 'orange' 클래스를 추가합니다.
//     tabButtons[0].classList.add('orange');
    
//     // 모든 'tab-content' 요소들을 가져옵니다.
//     const tabContents = document.querySelectorAll('.tab-content');

//     // 모든 'tab-content' 요소들에서 'show' 클래스를 제거합니다.
//     tabContents.forEach(function(content) {
//         content.classList.remove('show');
//     });

//     // 해당하는 'tab-content' 요소에 'show' 클래스를 추가합니다.
//     tabContents[0].classList.add('show');
// });
