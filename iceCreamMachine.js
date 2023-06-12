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
      const Bsensor = new BaseSensor();
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
      const Fsensor = new FlavorSensor();
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
      const Tsensor = new ToppingSensor();
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
      const Msensor = new MakingSensor();
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
      this.numbers = 20; //요소 수량
      this.address = 0; //실행을 위한 임의값 초기화
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
      console.log("투입완료:",this.PIN[Num]);
  }
}

class BaseSensor extends Sensor{
  constructor(){
      super();
      this.PIN = Array.from({ length: 3 }, () => new Node());
      this.Timer = 3000;
  }
}

class FlavorSensor extends Sensor{
  constructor(){
      super();
      this.PIN = Array.from({ length: 6 }, () => new Node());
      this.Timer = 1000;
  }
}

class ToppingSensor extends Sensor{
  constructor(){
      super();
      this.PIN = Array.from({ length: 6 }, () => new Node());
      this.Timer = 1000;
  }
}

class MakingSensor extends Sensor{
  constructor(){
      super();
  }
  mixing(){
      this.PIN = true;
      console.log("재료 혼합중");
      for(let i=0;i<this.Timer;i++); //setTimeout() 비동기 처리 문제로 for문 사용
      this.PIN = false;
      console.log("혼합완료");}

  cooling(){
      this.Timer = 10000;
      this.PIN = true;
      console.log("냉각중");
      for(let i=0;i<this.Timer;i++);
      this.PIN = false;
      console.log("냉각완료");
  }
  packing(){
      console.log("포장중");
      //포장지 품절 알림 시스템
      //포장지 꺼내서 포장하는 시스템
  }
}

function iceCream() 
{
  let base = new BaseIn()
  let flavor = new FlavorIn();
  let topping = new ToppingIn();
  let making = new Making();

  // 주문 받기
  // for(let prop in () => this)
  // this.prop.menu(); 이렇게 하고 싶은데...
  base.menu();
  flavor.menu();
  topping.menu();
  making.menu();

//임의값 선정
  base.select = 'cream';
  flavor.select = 'strawberry';
  topping.select = 'popCandy';
  making.select = 'corn';
  
    //제조 공정
  base.excute(); // 베이스 투하
  flavor.excute(); //향료 투하
  topping.excute(); //토핑 투하
  const mix = new MakingSensor;
  mix.mixing(); //혼합
  making.excute(); //제조
  return console.log("포장 완료: 아이스크림 제공"); //아이스크림 제공
};
  
  
  let user1 = iceCream();