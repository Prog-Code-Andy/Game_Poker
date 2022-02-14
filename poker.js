function Card(suitCard, rangCard){
    this.suitCard = suitCard;
    this.rangCard = rangCard;

    let suit = ["S","C","D","H"];
    let rang = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    this.toStr = function () {
        return rang[this.rangCard] + suit[this.suitCard];
    }
};


var c1 = new Card(2, 3);
var c2 = new Card(0, 11);
var c3 = new Card(2, 7);

console.log(c1.toStr()+", "+c2.toStr()+", "+c3.toStr());



function Desk(large = 52) {
    this.size = large;
    let desk = new Array(this.size);
    let top = 0;

    //Полнение колоды
    for (let i = 0; i < this.size; i++) {
        this.desk[i] = i;
    }

    //Перемешивание массива
    this.shuffle = function(){
        this.desk = this.desk.sort(() => Math.random() - 0.5);
        return this.desk;
    }

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