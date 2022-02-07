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

    for (let i = 0; i < this.size; i++) {
        this.desk[i] = i;
    }

    this.checkDesk = function () {
        console.log(this.desk);
    }

    this.getSort = function(){
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
    
    function getResultDesk(i = 0){
        let QuanArr = [];
        QuanArr.push(Math.floor(_resDesk[top + i]/13));
        QuanArr.push(_resDesk[top + i]%13); 
        return QuanArr;
    }

    this.getCardSec = function(quantity){
        if(top >= this.size || !quantity) return false;
        let tempDeskArr = new Array();
        for (let i = 0; i < quantity; i++) {
            tempDeskArr.push(getResultDesk());
            top++;
        }
        return tempDeskArr;
    }

    this.checkExtradite = function(){
        let cardIssued = new Array();
        for (let i = top; 0 < i; i--) {
            cardIssued.push(getResultDesk(-i));
        }
         return cardIssued;
    }
    
    this.deskPrint = function (deskCard) {
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
let prnt = desk.getCardSec(5);
desk.deskPrint(prnt);
let issuedCard = desk.checkExtradite();
desk.deskPrint(issuedCard);
card.cardPrint();
desk.checkExtradite();