// //단수의 html요소 선택시
// const h1 = document.querySelector("h1");
// console.log(h1);
// // console.dir(h1);

// //특정 부모요소 안쪽의 자식 요소 탐색 선택
// const title = document.querySelector(".title a");
// console.log(title);

// //복수개 요소 탐색하는 방법
// const list = document.querySelectorAll('ul li');
// // console.log(list);
// // console.log(list[1]);

// //배열형태로 반환된 복수개의 html요소 하나씩 선택
// // for(let i=0; i<4; i++) {
// //     console.log(list[i]);
// // }


// //화살표함수 표현식과 forEach 내장함수를 이용한 DOM반복 선택방법
// //배열.forEach((반복요소,순번)=>{반복코드})
// list.forEach((el) => console.log(el));


// //자바스크립트에서 함수 만드는 법
// //1. 함수선언식
// function plus (num1, num2) {
//     const result = num1+num2;
//     return result;
// }
// console.log(plus(2,4));

// //2. 함수표현식 (변수에 익명함수 대입)
// const minus = function(num1,num2) {
//     const result = num1 - num2;
//     return result;
// };
// console.log(minus(3,1));

// //3. 화살표 함수로 축약된 함수 표현식
// // 화살표 함수에서는 function 키워드 생략, 중괄호 안쪽에 return 문만 있으면 중괄호와 return문도 생략 가능
// //화살표 함수는 단지 기존 코드의 축약 말고도
// //함수 내부의 this 객체 생성을 막아서 고정해주는 효과 (객체지향 프로그램시 필요)
// const multiply = (num1, num2) => num1*num2;
// console.log(multiply(3,3));




// ========================
// ========================




// const h1 = document.querySelector("h1");
// const link = document.querySelector(".title a");
// const list = document.querySelectorAll('ul li');

// console.dir(h1);
// console.dir(link);
// console.dir(list[0]);

// //DOM 스타일 제어
// h1.style.backgroundColor = 'pink'; //h1 배경컬러 핑크 설정
// h1.style.fontSize = '10rem'; //h1 폰트사이즈 설정


// //DOM 속성 변경 (attribute 변경)
// link.href = "https://www.naver.com";


// //DOM의 텍스트 변경 (textnode)
// list[0].innerText = "목록1";

// //DOM의 html 구성 변경 (elementNode)
// list[1].innerHTML = '<span>list2</span>';

// //이벤트 : 사용자, 시스템이 웹상에서 발생시키는 모든 액션
// // 사용자 이벤트 : click, mouseovr, mouseout, resize, scroll, mousewheel, mousemove 
// // 시스템 이벤트 : load, error

// //DOM의 이벤트설정
// list[2].onclick = () => {
//     console.log("You click list3");
// };




// ========================
// ========================




// const h1 = document.querySelector("h1");
// const h2 = document.querySelector("h2");

// // DOM의 스타일을 다룰때 중요한 점
// h1.style.color = 'blue';

// // css로 적용된 스타일값을 자바스크롭 가져오는법
// //html을 브라우저가 생성하는 DOM만 제어가능할뿐, cssDOM접근, 제어가 불가능
// //그래서 이미 화면상에 스타일이 적용되어 있다 하더라도 DOM자체적으로 스타일 값이 없음
// console.dir(h2.style);
// console.log(h2.style.color);  // 단독 실행 안됨

// //결국 자바스크립트는 cssDOM에 의해서 생성된 스타일객체에 접근할 수 없기 떄문에 객체정보를 가져오는 게 아니라
// //화면에 랜더링 된 스타일 값을 가져오기 위해서는
// //화면에 이미 출력된 값을 역으로 연산해서 가져옴 
// //아래처럼 이미 출력된 값을 재연산해서 가져오기 때문에 반환값이 color:violet 이 아닌 실제적 수치값인 rgb값을 가져옴

// console.log(getComputedStyle (h2).color);
// // rgb(238, 130, 238)
// console.log(getComputedStyle (h1).fontSize);
// //160px




// ========================
// ========================




// const a = document.querySelector("a");
// console.dir(a);

// //a.href = "https://www.naver.com";
// //console.log(a.href);

// //문서객체의 속성값 변경, 속성환 반환을 위한 전용 내장 함수
// //setAttribute, getAttribute라는 내장함수를 이용하면
// //data-접두사가 붙은 커스터 속성도 편하게 수정,호출 가능
// a.setAttribute("href", "https://www.naver.com");

// //문서객체의 특정 속성값 가져오기
// console.log(a.getAttribute("href"));

// // a.data-index = '3';
// console.log(a.getAttribute("data-index"));
// a.setAttribute("data-index", 3);
// console.log(a.getAttribute("data-index"));
// console.dir(a);







const a = document.querySelector("a");
const btn = document.querySelector("button");

//문서객체에 이벤트 속성에 직접 함수를 대입하면
//추후 다른 함수로 덮어쓰기 될 잠재적인 이슈 발생
/*
btn.onclick= () => {
    console.log("엄청 중요한 기능");
};

btn.onclick= () => {
    console.log("쓸데없는 기능");
};
*/

//아래 같이 이벤트 전용 내장함수를 사용하면 기존 함수가 덮어씌어지는 이슈 방지 가능
btn.addEventListener("click", () => {
    console.log("엄청 중요한 기능");
});

btn.addEventListener("click", () =>{
    console.log("쓸데없는 기능");
});


//a요소에 이벤트 연결시 주의점
// a요소는 href값 등록된 url로 링크 이동이라는 디폴트  기능 설정
//a요소에 클릭 이벤트 연결할시에는 미리 링크 이동이라는 디폴트 기능을 막아줌
a.addEventListener('click', (e) => {
    //a요소의 기본 기능인 링크기능을 막아주는 함수
    e.preventDefault();
    console.log("Younclicked a button!");
});