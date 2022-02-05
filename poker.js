function Card(suitCard, rangCard){
    this.suitCard = suitCard;
    this.rangCard = rangCard;

    let suit = ["S","C","D","H"];
    let rang = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    

    this.cardPrint = function (desk) {
        if (desk) {
            console.log(desk);
            let printInf = "";
            for (let i = 0; i < desk.length; i++) {
                for (let j = 0; j < 1; j++) {
                    printInf += suit[desk[i][j]] + "" + rang[desk[i][j+1]] + " ";
                }
            }
            console.log(printInf);
        }
    }
};




function Desk(large = 52) {
    this.size = large;
    this.desk = new Array(this.size);

    for (let i = 0; i < this.size; i++) {
        this.desk[i] = 0;
    }

    this.checkDesk = function () {
        console.log(this.desk);
    }

    this.getCard = function(quantity){
        if(!quantity || quantity > this.size) return;
        let numbQua = quantity;
        let tempQuanArr = new Array();
        do{
            let cardRand = Math.floor(Math.random()*this.size);
            let tepmCardArr = [];
            if(this.desk[cardRand] === 0){
                this.desk[cardRand] = 1;
                tepmCardArr.push(Math.floor(cardRand/13));
                tepmCardArr.push(cardRand%13);
                tempQuanArr.push(tepmCardArr);
                numbQua--;
            }
        }while(numbQua >= 1)
        return tempQuanArr;
    }
};


let desk = new Desk();
let card = new Card();
desk.checkDesk();
let cardGame = desk.getCard(10);
cardGame = desk.getCard(10);
card.cardPrint(cardGame);
console.log(desk);