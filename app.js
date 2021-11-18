class Casino {
    // Write code here
    
   

    constructor(casinoName, isFakeCoin = false){
        this.casinoName = casinoName;
        this.timesPlayed = 0;
        this.isFakeCoin = isFakeCoin;
    }

    playGame(betAmount){
        
        if(Math.random() <= 0.5 || this.isFakeCoin){
            console.log("Casino Wins");
        }else{
            this.timesPlayed++;
            
            let amount = betAmount * (this.timesPlayed);
        
            console.log(`You won ` + amount + ` from ${this.casinoName}`);
            
        }

    }

    
    rollDie(die){
        die++; //so we can get floor
        console.log("You rolled a " +  Math.floor(Math.random() * die));
        
    }


};

// TESTS
const myCasino = new Casino("HackerU Casino");
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);


// Extra BONUS TESTS
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);

