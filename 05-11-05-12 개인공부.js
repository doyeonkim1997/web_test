/* 
function info(name, birthyear, age) {
  console.log(`${name} ${birthyear}년생 ${age}살`);
}
info("콩", 2017, 10);
info("두부", 2018, 9);


let arr = [10,20,30]
console.log(arr.length);


let arr = new Array(3);
console.log(arr);
console.log(arr.length);


let fruit = ["딸기", "오렌지", "포도"];

console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);


let scores = [82, 92, 78];
for (let i = 0; i < scores.length; i++) {
  console.log(`${i + 1}번째 점수 : ${scores[i]}`);
}


let fruit = ["사과", "바나나"];
fruit.push("딸기", "파인애플");
console.log(fruit);


let fruit = ["사과", "바나나", "포도"];

let a = fruit.shift();  // "사과" 제거
let b = fruit.pop();    // "포도" 제거

console.log(fruit); // ["바나나"]
console.log(a);     // 사과
console.log(b);     // 포도


let nums = [1, 2, 3, 4];
nums.splice(2, 1, 99); 
console.log(nums);


let nums = [10, 20, 30, 40];
let part = nums.slice(1, 3); // index 1부터 3 직전까지
console.log(part);


let items = ["컵", "책", "가방"];
console.log(items.indexOf("책"));
console.log(items.indexOf("연필"));

연필 실행값은 -1로 나오는데,
console.log로 없는 것을 여러개 적어도 -2, -99 등이 나오지 않는다.
인덱스는 음수를 포함하지 않고 0 이상부터 존재하기 때문.
-1로 표기하는 것은 가독성을 위해 사용함


let letters = ["J", "S"];
console.log(letters.join("-"));

join("-")은 배열 안의 요소들을
"-" 기호로 이어붙여서 하나의 문자열로 바꿔주는 메서드임.
+, 은는이가 등 다른 걸 넣어도 글자가 이어서 나옴. 


let nums = [1, 2, 3];
nums.reverse();
console.log(nums);


let person = {
  name: "홍길동",
  age: 25,
  isStudent: true
};
console.log(person);


// 1. 리터럴 방식
let car = {
  brand: "Hyundai",
  model: "Sonata",
  year: 2022
};
console.log(car);

이 경우 콘솔로그가 없을 때 내가 ()안에 선언한 값 car을 넣으면
위의 내용이 나온다.

// 2. 생성자 방식
let user = new Object();
user.name = "Alice";
console.log(Object);

이 경우는 일단 틀렸는데, object가 아닌 user을 적어야 나온다.
Object는 도구이고, user이라는 빈 폴더를 만든것이다.


let book = {
  title: "JavaScript",
  price: 15000
};

// 점 표기법
console.log(book.title); // JavaScript

// 대괄호 표기법
console.log(book["price"]); // 15000

대괄호 표기법은 key를 문자열로 정확히 써야 해서 따옴표가 필수임.


let user = {};

user.name = "John";
user["age"] = 28; // 기존 나이

user.age = 29; // 나이가 덮어쓰기 됨

delete user.name; // 이름 지우기

console.log(user); // { age: 29 }

같은 key에 값을 다시 할당하면 기존 값이 덮어써짐
새로운 key를 쓰면 추가
delete를 쓰면 삭제


const user = { name: "Alice", age: 30 };
console.log(Object.keys(user));


const user = { name: "Alice", age: 30 };
console.log(Object.values(user));


const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = Object.assign({}, obj1, obj2);

console.log(merged);

{} ← 비어있는 객체 생성 (여기에 합쳐 넣을 거야)
obj1의 모든 속성 { a: 1 } 을 복사해서 집어넣음
이어서 obj2의 모든 속성 { b: 2 } 도 넣음
👉 최종 결과: { a: 1, b: 2 }

*/

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const merged = { ...obj1, ...obj2 };
console.log(merged);