function Card(suitCard, rangCard){
    this.suitCard = suitCard;
    this.rangCard = rangCard;

    let suit = ["S","C","D","H"];
    let rang = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    this.toString = function () {
        return rang[this.rangCard] + suit[this.suitCard];
    };
};


/* var c1 = new Card(2, 3);
var c2 = new Card(0, 11);
var c3 = new Card(2, 7);

console.log(c1 + ", " + c2 + ", " + c3); */



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
        this.desk = this.desk.sort(() => Math.random() - 0.5);
        return this.desk;
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
let hand1 = desk.getCards(7);
let hand2 = desk.getCards(7);
console.log(hand1[0]);

printHand(hand1);
printHand(hand2);

printHand(desk.getCardsShadows(false));
