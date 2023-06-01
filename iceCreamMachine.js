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
    putIn(){}
  }
  
  class BaseIn extends Order{
    constructor(){
        super();
        this.ingredient = ['크림', '빙수', '요거트'];
    }
    putIn() {
        const Num = this.ingredient.findIndex((element) => element === this.select);
        const Bsensor = new BaseSensor();
        Bsensor.open(Num);
    }
  }
  
  class FlavorIn extends Order{
    constructor(){
        super();
        this.ingredient = ['초코맛', '딸기맛', '바닐라맛', '바나나맛', '포도맛', '오렌지맛'];
    }
    putIn() {
        const Num = this.ingredient.findIndex((element) => element === this.select);
        const Fsensor = new FlavorSensor();
        Fsensor.open(Num);
    }
  }
  
  class ToppingIn extends Order{
    constructor(){
        super();
        this.ingredient = ['초콜릿', '땅콩', '팝핑캔디', '건포도', '시리얼', '코코팜'];
    }
    putIn() {
        const Num = this.ingredient.findIndex((element) => element === this.select);
        const Tsensor = new ToppingSensor();
        Tsensor.open(Num);
        return 1;
    }
  }
  
  //node structure
  class Node{
    constructor(){
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
  
  class Mixture{
    constructor(){
        this.mixer; //믹서 센서
        this.Timer = 10000;
    }
    mixing(){
        this.mixer = true;
        console.log("재료 혼합중");
        for(let i=0;i<this.Timer;i++);
        this.mixer = false;
        console.log("혼합완료");}
  }
  
  class Manufacture{
    constructor(){
        this.cooler;
        this.make = ["bar", "tube", "corn"];
        this.check;
        this.Timer;
    }
    form(){
        console.log("아이스크림 유형:",this.make);
        const Num = this.make.find((element) => element === this.check);
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
        this.cooling();
        this.packing();
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
    cooling(){
        this.Timer = 10000;
        this.cooler = true;
        console.log("냉각중");
        for(let i=0;i<this.Timer;i++);
        this.cooler = false;
        console.log("냉각완료");
    }
    packing(){
        console.log("포장중");
        //포장지 품절 알림 시스템
        //포장지 꺼내서 포장하는 시스템
    }
  }
  
  class IceCreamMachine {
    constructor() {
        this.base = new BaseIn();
        this.flavor = new FlavorIn();
        this.topping = new ToppingIn();
        this.mixture = new Mixture();
        this.manufacture = new Manufacture();
    }
  
    orderIceCream() {
    // 주문 받기
        this.base.menu();
        this.flavor.menu();
        this.topping.menu();
  
    //임의값 선정
        this.base.select = '크림';
        this.flavor.select = '딸기맛';
        this.topping.select = '팝핑캔디';
        this.manufacture.check = 'corn';
  
    //재료 넣기
        this.base.putIn();
        this.flavor.putIn();
        this.topping.putIn();
    // 혼합
        this.mixture.mixing();
    // 제조
        this.manufacture.form();
    //아이스크림 제공
        console.log("포장 완료: 아이스크림 제공");
    }
  }
  
  
  user1 = new IceCreamMachine();
  user1.orderIceCream();