const ArrTest = [];
var printCard = "";

function RangCard() {
  this.cardRank = {
    1: "A",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "J",
    12: "Q",
    13: "K"
  };

  this.cardSuit = ["D", "H", "C", "S"];

  this.cardGameRank = function () {
    let temp = Object.keys(this.cardRank)[~~Math.floor(Math.random() * 13)];
    return temp + " " + this.cardRank[temp];
  };

  this.cardGameSuit = function () {
    return this.cardSuit[~~Math.floor(Math.random() * 4)];
  };
}

function Card(numbCard, pictCard) {
  this.rankCard = numbCard;
  this.siutCard = pictCard;
  

  var splitRes = function (dateRes) {
    return dateRes.split(" ");
  };

  this.pushCardArr = function () {
    ArrTest.push(this.rankCard + " " + this.siutCard);
    console.log(ArrTest);
  };

  this.printCardToString = function () {
    var tempPrnt = "";
    if (this.siutCard === "D") {
      tempPrnt = "\u{2666}";
    } else if (this.siutCard === "H") {
      tempPrnt = "\u{2665}";
    } else if (this.siutCard === "S") {
      tempPrnt = "\u{2660}";
    } else {
      tempPrnt = "\u{2663}";
    }
    var rankArr = splitRes(this.rankCard);
    printCard += rankArr[1] + "" + tempPrnt + " ";
    console.log(printCard);
    return rankArr[1] + "" + tempPrnt + " "
    
  };

  this.LetsCardСomparison = function () {
    //сравнить данные масива на элементы одинаковые - метод сравнения
    for (let i = 0; i < ArrTest.length; i++) {
        for (let j = 0; j < ArrTest.length; j++) {
            //исклучили i индекс
            if(i !== j){
                if(ArrTest[i] === ArrTest[j]){
                    console.log("Есть дубли")
                    return j;
                }
            }
        } 
    }
    return false;
};

//метод замены дублей
this.replacComaparResult = function (newCord) {
    ArrTest[newCord] = (this.rankCard + " " + this.siutCard);
    var tempReplaceCard = printCard.split(" ");
    tempReplaceCard[newCord] = this.printCardToString();
    printCard = tempReplaceCard.join(" ");
}

//метод сортировки
this.sortCard = function(){
    for (let i = 0; i < ArrTest.length; i++) {
        var tempRes = splitRes(ArrTest[i]);
    }
    /* console.log(tempRes) */
    
    /* ArrTest.sort(); */
}



};


for (let i = 0; i < 5; i++) {
    //создаем данные случайной карту
  const valueCard = new RangCard();
  //карта
  const pokerCard = new Card(valueCard.cardGameRank(), valueCard.cardGameSuit());
  pokerCard.pushCardArr();
  //Проверка на Дубли карт из автоматической раздачи
  let chekResCard = pokerCard.LetsCardСomparison();
  if(chekResCard){
    let repeatValueCard = new RangCard();
    let repeatPokerCard = new Card(repeatValueCard.cardGameRank(), repeatValueCard.cardGameSuit());
    repeatPokerCard.replacComaparResult(chekResCard);
  } 
  pokerCard.sortCard();
  //Печать результата
  pokerCard.printCardToString();
}

/* var card = new Card();
console.log(card.arrGame); */

/* U+2666 буба D*/
/* U+2665 сердце H*/
/* U+2660 пика S*/
/* U+2660 треф C*/

/* \u{1f600} */
