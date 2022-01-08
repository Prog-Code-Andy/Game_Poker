function Card(rankCard){
    this.arrGetCard = rankCard;
    console.log(rankCard);
    this.rang = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    this.suit = ["S","C","D","H"];
 
    //Метод генерирования карты
    this.GenerCard = function(){
        var newCard = this.rang[rankCard%13] + "" + this.suit[~~(rankCard/13)];
        return newCard;
     };
     //Метод печати для теста
     this.strTestPrint = function(){
         if(!this.arrGetCard) return false;
         var printInLine = "";
         for (let i = 0; i <  this.arrGetCard.length; i++) {
            var newCard = this.rang[this.arrGetCard[i]%13] + "" + this.suit[~~(this.arrGetCard[i]/13)];
            printInLine += newCard + " ";
         }
         console.log(printInLine);
     }

};


function Desk(large = 52){
    this.size;
    this.arrDesk = new Array(large);
    this.emptySize = 0;
    //наполнение колоды
    this.generDesk = function(){
         for (let i = 0; i < this.arrDesk.length; i++) {
            this.arrDesk[i] = 0;
         }
            this.size = this.arrDesk.length;
            console.log(this.arrDesk);
    };
    //проверка размера колоды
    this.checkLengthDesk = function(){
        if(this.size === large) return true;
        return false;
    };

    this.getCard = function(numbCard){
        var num = numbCard;
        var numbIndCard = [];
        //отправляет в function Card(rankCard) - полученый индекс массива
            this.createCard = function(){
                for (let i = 0; i < num; i++) {
                    var numCard = ~~(Math.random()*large);
                     if(this.arrDesk[numCard] === 1 && this.emptySize <= this.arrDesk.length){
                         do{
                             numCard = ~~(Math.random()*large);
                         }while(this.arrDesk[numCard] != 0)
                         this.emptySize++;
                         this.arrDesk[numCard] = 1;
                         numbIndCard.push(numCard);
                         console.log("DO");
                     }else{
                        this.emptySize++;
                        this.arrDesk[numCard] = 1;
                        numbIndCard.push(numCard);
                        console.log("TODO");
                     }

                 }
                 console.log(this.arrDesk);
                 return numbIndCard;
            }
            if(!num) return false;
    }
};





const desk = new Desk();
//сгенирироввать колоду
desk.generDesk();
//Проверка длины колоды
console.log(desk.checkLengthDesk());
//раздать кол-во карт
desk.getCard(5);
//из метода getCard передает кол-во карт для печати и генерации
/* let getQuantityCard = desk.createCard(); */

const card = new Card(desk.createCard());
card.strTestPrint();


/* U+2666 буба D*/
/* U+2665 сердце H*/
/* U+2660 пика S*/
/* U+2660 треф C*/