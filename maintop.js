function Card(suitCard, rangCard){
    this.suit = suitCard;
    this.rang = rangCard;

     //Метод печати для теста
     this.strTestPrint = function(){
         console.log(this.suit + "" + this.rang);
     }

     this.getCardInDesk = function(){
         return this.suit + "" + this.rang;
     }
};




function Desk(large = 52){
    this.large = large;
    this.arrDesk = new Array();

    //проверка размера колоды
    this.checkLengthDesk = function(){
        if(this.large) return this.large;
        return false;
    };

     //наполнение колоды
     this.generDesk = function(card){
        this.arrDesk.push(card);
    };

    //Сортировать колоду -- разобрать
    this.sortDesk = function(){
        this.arrDesk.sort(() => Math.random() - 0.5);
    }

    //Распечатать массив
    this.printArr = function(){
        console.log(this.arrDesk);
    }
};





 //Метод генерирования карты
 function getGenerateCard(){
    let suit = ["S","C","D","H"];
    let rang = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    let desk = new Desk(52);
    let card;
    for (let i = 0; i < desk.checkLengthDesk(); i++) {
        card = new Card(suit[~~(i/13)], rang[~~(i%13)]);
        card.strTestPrint();
        desk.generDesk(card.getCardInDesk());
    }
    desk.printArr();
    desk.sortDesk();
    desk.printArr();

}

getGenerateCard();
/* U+2666 буба D*/
/* U+2665 сердце H*/
/* U+2660 пика S*/
/* U+2660 треф C*/