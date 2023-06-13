//abstract class
class Order{
  constructor(){
      this.ingredient = [];
      this.select;
  }
  menu(){
      console.log("메뉴표:",this.ingredient);
      //출력된 항목에서 클릭 이벤트로 선택받기, 선택받은 변수 select에 대입하고 select 반환
  }
  excute(){}
}

class BaseIn extends Order{
  constructor(){
      super();
      this.ingredient = ["cream", "ice", "yogurt"];
  }
  excute() {
      const Num = this.ingredient.findIndex((e) => e === this.select);
      const Bsensor = new BaseSensor(basePin);
      Bsensor.open(Num);
      return Bsensor.PIN;
  }
}

class FlavorIn extends Order{
  constructor(){
      super();
      this.ingredient = ["choco", "strawberry", "banila", "banana", "grape", "orange"];
  }
  excute() {
      const Num = this.ingredient.findIndex((e) => e === this.select);
      const Fsensor = new FlavorSensor(flavorPin);
      Fsensor.open(Num);
      return Fsensor.PIN;
  }
}

class ToppingIn extends Order{
  constructor(){
      super();
      this.ingredient = ["chocoChip", "peanut", "popCandy", "raisin", "serial", "cocopalm"];
  }
  excute() {
      const Num = this.ingredient.findIndex((e) => e === this.select);
      const Tsensor = new ToppingSensor(toppingPin);
      Tsensor.open(Num);
      return Tsensor.PIN;
  }
}

class Making extends Order{
  constructor(){
      super();
      this.ingredient = ["bar", "tube", "corn"];
  }
  excute(){
      const Num = this.ingredient.find((e) => e === this.select);
      switch (Num) {
          case "bar":
              this.bar();
              break;
          case "tube":
              this.tube();
              break;
          case "corn":
              this.corn();
              break;
      }
      const Msensor = new MakingSensor(makingPin);
      Msensor.cooling();
      Msensor.packing();
  }

  bar(){
      console.log("-막대바 제조중-");
      //사각틀을 얹어놓는다.사각틀에 혼합물을 붓는다.혼합물위에 나무막대를 얹어놓는다.
  }
  tube(){
      console.log("-쭈쭈바 제조중-");
      //튜브를 얹어놓는다.튜브에 혼합물을 붓는다.튜브 뚜껑을 밀봉한다.
  }
  corn(){
      console.log("-콘아이스크림 제조중-");
      //콘 과자를 얹어놓는다.콘에 혼합물을 붓는다.
  }
}




//node structure
class Node{
  constructor(){
      this.numbers = 20; //남은 제작 횟수 수량
      this.address = 0;//'0x' + Math.floor(Math.random() * Math.pow(2, 64)).toString(16); //실행을 위한 임의값 초기화
      this.signal = false; //default
  }
}

//abstract class
class Sensor{
  constructor(){
      this.PIN = Array.from({ length: 0 }, () => new Node());
      this.Timer;
  }
  
  open(Num){
      this.PIN[Num].signal = true;
      console.log("투입중:",this.PIN[Num]);
      for(let i=0;i<this.Timer;i++); //setTimeout()비동기 처리 문제로 for문 사용
      this.PIN[Num].signal = false;
      this.PIN[Num].numbers--; //수량 카운트값
      console.log("투입완료:",this.PIN[Num]);
  }
}

class BaseSensor extends Sensor{
  constructor(PINCount){
      super();
      this.PIN = PINCount;
      if(!PINCount)
          this.PIN = Array.from({ length: 3 }, () => new Node());
      this.Timer = 3000;
  }
}

class FlavorSensor extends Sensor{
  constructor(pin){
      super();
      this.PIN = pin;
      if(!pin)
          this.PIN = Array.from({ length: 6 }, () => new Node());
      this.Timer = 1000;
  }
}

class ToppingSensor extends Sensor{
  constructor(pin){
      super();
      this.PIN = pin;
      if(!pin)
          this.PIN = Array.from({ length: 6 }, () => new Node());
      this.Timer = 1000;
  }
}

class MakingSensor extends Sensor{
  constructor(pin){
      super();
      this.PIN = pin;
      if(!pin)
          this.PIN = Array.from({ length: 3 }, () => new Node());
  }
  mixing(){
      this.PIN[0] = true;
      console.log("재료 혼합중");
      for(let i=0;i<this.Timer;i++); //setTimeout() 비동기 처리 문제로 for문 사용
      this.PIN[0] = false;
      console.log("혼합완료");}

  cooling(){
      this.Timer = 10000;
      this.PIN[1] = true;
      console.log("냉각중");
      for(let i=0;i<this.Timer;i++);
      this.PIN[1] = false;
      console.log("냉각완료");
  }
  packing(){
      this.PIN[2].numbers--;
      console.log("포장중");
      //포장 시스템
  }
}

//고유한 sensor 등록
let basePin = Array.from({ length: 3 }, () => new Node());  
basePin[0].address = '0x7fa3c5c621b56000';
basePin[1].address = '0xa87581789016b000';
basePin[2].address = '0x7f871150a27c5000';

let flavorPin = Array.from({ length: 6 }, () => new Node());  
flavorPin[0].address = '0x4871df3f0649e000';
flavorPin[1].address = '0xb267550b23011000';
flavorPin[2].address = '0x65893d3f3f945000';
flavorPin[3].address = '0xf64018435c373000';
flavorPin[4].address = '0x370d57498877d000';
flavorPin[5].address = '0x6ffa0d5d6e45f000';

let toppingPin = Array.from({ length: 6 }, () => new Node());  
toppingPin[0].address = '0xab10b3e7cf8b2000';
toppingPin[1].address = '0x9ea094b49490a000';
toppingPin[2].address = '0xd44b09c3f668d000';
toppingPin[3].address = '0x27c4a8da5e21d000';
toppingPin[4].address = '0x78d4a1fa6a2eb000';
toppingPin[5].address = '0xb51d98dfd811c000';

let makingPin = Array.from({ length: 3 }, () => new Node());
makingPin[0].address = '0x6fa3c5c111b66000';
makingPin[1].address = '0xa27521789013b000';
makingPin[2].address = '0x4f871120a22a4000';


function menuview()
{
  let base = new BaseIn()
  let flavor = new FlavorIn();
  let topping = new ToppingIn();
  let making = new Making();

  console.log("아이스크림을 주문받습니다.");
  base.menu();
  flavor.menu();
  topping.menu();
  making.menu();
  console.log("-----------------------------------------------");
  console.log("- ------------------------------------------- -");
};

//factory pattern?
class iceCream{
  constructor(input1,input2,input3,input4){
    this.base = new BaseIn()
    this.flavor = new FlavorIn();
    this.topping = new ToppingIn();
    this.making = new Making();

    this.base.select = input1;
    this.flavor.select = input2;
    this.topping.select = input3;
    this.making.select = input4;
  }
}

//facade pattern?
function excution(callback)
{
  notify();
  callback.base.excute();
  callback.flavor.excute();
  callback.topping.excute();
  let mix = new MakingSensor(makingPin);
  mix.mixing();
  callback.making.excute();
  console.log("포장 완료: 아이스크림 제공");
  console.log("-----------------------------------------------");
  console.log("- ------------------------------------------- -");
};

//observer pattern?
function notify()
{
  let result = 0;
  basePin.forEach((e) => {
      if(e.numbers<=0){
          console.log(`base의 ${e.address}위치 요소가 부족합니다.`);
          result++;}
  });
  flavorPin.forEach((e) => {
      if(e.numbers<=0){
          console.log(`flavor의 ${e.address}위치 요소가 부족합니다.`);
          result++;}
  });
  toppingPin.forEach((e) => {
      if(e.numbers<=0){
          console.log(`topping의 ${e.address}위치 요소가 부족합니다.`);
          result++;}
  });
  makingPin.forEach((e) => {
      if(e.numbers<=0){
          console.log(`포장지가 부족합니다.`);
          result++;}
  });
  if (result > 0)
      return process.exit();
};
  
menuview();

let user1 = new iceCream('ice','choco','raisin','tube');
excution(user1);

let user2 = new iceCream('cream','strawberry','popCandy','corn');
excution(user2);

makingPin[2].numbers = 0; //포장지 수량이 떨어졌다고 가정
let user3 = new iceCream('yogurt','banana','serial','bar');
excution(user3);