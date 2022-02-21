function Card(suitCard, rangCard){
    this.suitCard = suitCard;
    this.rangCard = rangCard;

    let suit = ["S","C","D","H"];
    let rang = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    this.toString = function () {
        return rang[this.rangCard] + suit[this.suitCard];
    };
};

function HandRanking(hand){
    this.extraditeCard = hand;

    this.sortExtraditeCard = function(){
        return this.extraditeCard.sort((a,b) => a.rangCard - b.rangCard);
    }

    this.checkOnWinExtraditeCard = function(){
        let sumRang = 0;
        for (let i = 0; i < this.extraditeCard.length; i++) {
            sumRang += this.extraditeCard[i].rangCard;
        }
        /* if(sumRang === 50 && ) */
        console.log(sumRang);
        this.extraditeCard
    }
    console.log(this.extraditeCard);
    /* poker */
};




function Desk(large = 52) {
    this.size = large;
    let desk = new Array(this.size);
    let top = 0;

    //Полнение колоды
    for (let i = 0; i < this.size; i++) {
        desk[i] = i;
    };

    //Перемешивание массива
    this.shuffle = function(){
        return desk.sort(() => Math.random() - 0.5);
    };

    //Раздать карты
    this.getCards = function(quantity){
        let tempDeskArr = new Array();
        for (let i = 0; i < quantity && top < this.size; i++) {
            let c = desk[top++];
            tempDeskArr.push(new Card(~~(c/13), c%13));
        }
        return tempDeskArr;
    };

    this.getCardsShadows = function(given = true){
        let tempDeskArr = new Array();
        if(given){
            for (let i = top-1; i >= 0; i--) {
                tempDeskArr.push(new Card(~~(desk[i]/13), desk[i]%13));
            }
        }
        else
        {
            for (let i = top; i < desk.length; i++) {
                tempDeskArr.push(new Card(~~(desk[i]/13), desk[i]%13));
            }
        }
        return tempDeskArr;
    };

    this.reset = function (){
        top = 0;
        this.shuffle();
    }

};


function printHand(set)
{
    var res = "";
    for (let i = 0; i < set.length; i++) {
        res += set[i] + " ";
    }
    console.log(res);
}

let desk = new Desk();
desk.shuffle();
let hand1 = desk.getCards(7);
let hand2 = desk.getCards(7);

printHand(hand1);
printHand(hand2);

let test = new HandRanking(hand1);
hand1 = test.sortExtraditeCard();
printHand(hand1);
test.checkOnWinExtraditeCard();


printHand(desk.getCardsShadows());
