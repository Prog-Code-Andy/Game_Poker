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
    this.tempQuanArr;

    for (let i = 0; i < this.size; i++) {
        this.desk[i] = i;
    }

    this.checkDesk = function () {
        console.log(this.desk);
    }

    this

    this.getCard = function(quantity){
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
    }
    
    this.deskPrint = function () {
        let suit = ["S","C","D","H"];
        let rang = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        if (this.tempQuanArr) {
            let printInf = "";
            for (let i = 0; i < this.tempQuanArr.length; i++) {
                for (let j = 0; j < 1; j++) {
                    printInf += suit[this.tempQuanArr[i][j]] + "" + rang[this.tempQuanArr[i][j+1]] + " ";
                }
            }
            console.log(printInf);
        }
    }

};


let desk = new Desk();
let card = new Card();
desk.checkDesk();
console.log(desk.getCard(5));
desk.deskPrint();
card.cardPrint();