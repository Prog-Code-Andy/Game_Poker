function Card(suitCard, rangCard){
    this.suitCard = suitCard;
    this.rangCard = rangCard;

    let suit = ["S","C","D","H"];
    let rang = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    

    this.cardPrint = function (desk) {
        if (desk) {
            let printInf = "";
            for (let i = 0; i < desk.length; i++) {
                for (let j = 0; j < i.length-1; j++) {
                    printInf += suit[desk[i][j]] + " " + rang[desk[i][j+1]];
                }
            }
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
}


let desk = new Desk();
desk.checkDesk();
console.log(desk);