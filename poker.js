function Card(suitCard, rangCard){
    this.suitCard = suitCard;
    this.rangCard = rangCard;

    this.cardPrint = function () {
        console.log(this.rangCard + " " + this.suitCard);
    }
};




function Desk(large = 52) {
    this.size = large;
    this.desk = new Array(this.size);
    this.tempDeskCard;
    let top = 0;
    let _resDesk = this.desk;

    //Заполнение колоды
    for (let i = 0; i < this.size; i++) {
        this.desk[i] = i;
    }
    //Печать всего массива карт
    this.checkDesk = function () {
        if (!this.desk.length || !this.size) return false;
        console.log(this.desk);
    }
    //Сортировка массива
    this.getSort = function () {
        if (!this.desk.length || !this.size) return false;
        this.desk = this.desk.sort(() => Math.random() - 0.5);
        return this.desk;
    }

    /* this.getSort = function(){
        for (let i = 0; i < this.desk.length; i++) {
            let rand = Math.floor(Math.random() * (i));
            console.log(rand);
            this.desk[rand] = this.desk[i];
        }
        return this.desk;
    } */

    /* this.getCard = function(quantity){
        if(!quantity || quantity > this.size) return;
        let numbQua = quantity;
        this.tempQuanArr = new Array();
        do{
            let cardRand = Math.floor(Math.random()*this.size);
            let tepmCardArr = [];
            if(this.desk[cardRand] != "*"){
                this.desk[cardRand] = "*";
                tepmCardArr.push(Math.floor(cardRand/13));
                tepmCardArr.push(cardRand%13);
                this.tempQuanArr.push(tepmCardArr);
                numbQua--;
            }
        }while(numbQua >= 1)
        return this.tempQuanArr;
    } */
    
    //Функция для обработки массива
    function getResultDesk(i = 0) {
        let QuanArr = [];
        QuanArr.push(Math.floor(_resDesk[top + i]/13));
        QuanArr.push(_resDesk[top + i]%13); 
        return QuanArr;
    }
    //Раздать карты
    this.getCardSec = function(quantity){
        if(top >= this.size || !quantity) return false;
        let tempDeskArr = new Array();
        for (let i = 0; i < quantity; i++) {
            tempDeskArr.push(getResultDesk());
            top++;
        }
        return tempDeskArr;
    }
    //Проверка выданых карт
    this.checkExtradite = function () {
        if (!this.desk.length || !this.size) return false;
        let cardIssued = new Array();
        for (let i = top; 0 < i; i--) {
            cardIssued.push(getResultDesk(-i));
        }
         return cardIssued;
    }
    // Проверка остатка карт в колоде
    this.chackBalance = function () {
        if (!this.desk.length || !this.size) return false;
        let cardBalance = new Array();
        let tempCount = 0;
        for (let i = top; i < this.desk.length; i++) {
            cardBalance.push(getResultDesk(tempCount));
            tempCount++;
        }
        return cardBalance;
    }
    
    this.deskPrint = function (deskCard) {
        if (!deskCard.length || !this.size) return false;
        let suit = ["S","C","D","H"];
        let rang = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        if (deskCard) {
            let printInf = "";
            for (let i = 0; i < deskCard.length; i++) {
                for (let j = 0; j < 1; j++) {
                    printInf += rang[deskCard[i][j+1]] + "" + suit[deskCard[i][j]] + " ";
                }
            }
            console.log(printInf);
        }
    }

};


let desk = new Desk();
let card = new Card();
desk.checkDesk();
console.log(desk.getSort());
//Выдать 5
let prnt = desk.getCardSec(5);
//Распечатай 5
desk.deskPrint(prnt);
//Выдать еще 10
prnt = desk.getCardSec(10);
//Распечатай 10
desk.deskPrint(prnt);
//Распечатай выданые карты ВСЕ
desk.deskPrint(desk.checkExtradite());
//распечатать остаток в колоде
desk.deskPrint(desk.chackBalance());
//Для печати карты
card.cardPrint();
