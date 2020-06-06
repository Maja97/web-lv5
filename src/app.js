

const btnFight = document.querySelector('#generateFight');
const btnRandom = document.querySelector("#randomFight");
const btnEditLeft = document.querySelector("#btnEditLeft");
const btnEditRight = document.querySelector("#btnEditRight");

let fighter = document.querySelectorAll(".fighter-box");
let images = document.querySelector(".fighter-list").getElementsByTagName("img");

image = document.querySelectorAll(".featured-cat-fighter-image");
x = document.querySelectorAll(".name");
let name = Array.from(x);
let age = document.querySelectorAll(".age");
let information = document.querySelectorAll(".skills");
let wins = document.querySelectorAll(".wins");
let loss = document.querySelectorAll(".loss");

let message = document.getElementById("message");

let leftFighter = document.querySelector("#firstSide").querySelectorAll(".fighter-box");
let rightFighter = document.querySelector("#secondSide").querySelectorAll(".fighter-box");

let arrSize = fighter.length / 2;

var leftSelected = new Array(arrSize).fill(false);
var rightSelected = new Array(arrSize).fill(false);

class CatFight {
    init() {
        btnFight.disabled = true;
        btnEditLeft.disabled = true;
        btnEditRight.disabled = true;
        this._imgClickHandler();
        this._fightClickHandler();
        this._randomClickHandler();
        this._editClickHandler();
    }

    _editClickHandler(){
       btnEditLeft.addEventListener("click",(e) => {
           let side = 0;
           this._setItem(side);
       })
       btnEditRight.addEventListener("click", (e) =>{
        let side = 1;
        this._setItem(side);
       })
        
    }

    _setItem(side){
        localStorage.setItem("image", image[side].src);
        localStorage.setItem("age", age[side].textContent);
        localStorage.setItem("name", name[side].textContent);
        localStorage.setItem("info", information[side].textContent);
        localStorage.setItem("wins", wins[side].textContent);
        localStorage.setItem("loss", loss[side].textContent);
        if(side==0){
        let left = leftSelected.findIndex(function(selected){
            return selected == true;
            });;
            localStorage.setItem("id",left+1);
        }
        else if(side==1){
        let right = rightSelected.findIndex(function(selected){
            return selected == true;
            });;
            localStorage.setItem("id",right+1);
        } 
           
    }

    _clearResults() {
        image[0].style.border = "none";
        image[1].style.border = "none";
        message.innerHTML = "";
    }
    _fightClickHandler() {
        btnFight.addEventListener("click", (e) => {
            this._clearResults();
            btnFight.disabled = true;
            btnRandom.disabled = true;
            btnEditLeft.disabled = true;
            btnEditRight.disabled = true;
            Array.from(fighter).forEach(element => {
                element.style.pointerEvents = "none";
            })

            const sleep = (milliseconds) => {
                return new Promise(resolve => setTimeout(resolve, milliseconds))
            }
            document.getElementById("clock").innerHTML = 3;
            this._countDown(2);

            sleep(3000).then(() => {
                this._fight();
                document.getElementById("clock").innerHTML = "";
                btnFight.disabled = false;
                btnRandom.disabled = false;
                btnEditLeft.disabled = false;
                btnEditRight.disabled = false;
                Array.from(fighter).forEach(element => {
                    element.style.pointerEvents = "auto";
                })
            });
        })
    }
    _countDown(i) {
        var int = setInterval(function () {
            document.getElementById("clock").innerHTML = i;
            i-- || clearInterval(int);
        }, 1000);
    }

    _fight() {

        let lWins = parseFloat(document.querySelector("#firstSide").querySelector(".cat-info").querySelector(".wins").textContent);
        let lLoss = parseFloat(document.querySelector("#firstSide").querySelector(".cat-info").querySelector(".loss").textContent);
        let rWins = parseFloat(document.querySelector("#secondSide").querySelector(".cat-info").querySelector(".wins").textContent);
        let rLoss = parseFloat(document.querySelector("#secondSide").querySelector(".cat-info").querySelector(".loss").textContent);

        let leftPercent = this._calculatePercentage(lWins, lLoss);
        let rightPercent = this._calculatePercentage(rWins, rLoss);

        let advantage = 10;
        let winner = 0;
        if (leftPercent > rightPercent) {
            if (leftPercent - rightPercent > 10) {
                advantage = 20;
                winner = this._getFightResults(advantage, 0);
            }
            else winner = this._getFightResults(advantage, 0);
        }
        else {
            if (rightPercent - leftPercent > 10) {
                advantage = 20;
                winner = this._getFightResults(0, advantage);
            }
            else winner = this._getFightResults(0, advantage);
        }
        message.innerHTML = "Winner is " + name[winner].textContent;
        image[winner].style.border = "3px solid green";
        image[1 - winner].style.border = "3px solid red";

        let winnerName = name[winner].textContent;
        let loserName = name[1-winner].textContent;

        this._changeStats(winner);

        
        $.ajax({
            url: 'controller/db/Update.php', 
            type: 'POST',
            data: { 'winner':winnerName, 'loser': loserName },
       }).done(function () {
           
       }).fail(function () {
            alert('something went wrong');
       });
       
    }

    _calculatePercentage(wins, loss) {
        return (wins / (wins + loss) * 100).toFixed(3);
    }

    _changeStats(winner) {
        Array.from(fighter).forEach(element => {
            let info = JSON.parse(element.getAttribute("data-info"));

            if (name[winner].textContent == info.name) {
                info.record.wins++;
                this._chooseCat(info, winner);
            }
            else if (name[1 - winner].textContent == info.name) {
                info.record.loss++;
                this._chooseCat(info, 1 - winner);
            }
            let newInfo = JSON.stringify(info);
            element.setAttribute("data-info", newInfo);
        });
    }
    _getFightResults(leftAdvantage, rightAdvantage) {
        let winnerNumber = Math.round(Math.random() * 100);
        let winner = 0;

        if (winnerNumber >= (50 + leftAdvantage) - rightAdvantage)
            winner = 1;
        return winner;
    }

    _randomClickHandler() {
        btnRandom.addEventListener("click", (e) => {
            this._clearResults();
            btnFight.disabled = false;
            btnEditRight.disabled = false;
            btnEditLeft.disabled = false;
            let different = false;
            while (!different) {
                let leftCat = this._generateRandomCat(leftFighter);
                let rightCat = this._generateRandomCat(rightFighter);
                if (leftCat.id != rightCat.id) {
                    different = true;
                    this._chooseCat(leftCat, 0);
                    this._chooseCat(rightCat, 1);
                    this._changeSelected(leftSelected, leftCat);
                    this._changeSelected(rightSelected, rightCat);
                }
            }
        })
    }

    _changeSelected(selected, cat) {
        selected.forEach((value, index) => selected[index] = false);
        selected[cat.id - 1] = true;
    }

    _generateRandomCat(fighter) {
        let fighters = [];
        let randomNum = Math.floor(Math.random() * leftSelected.length) + 1;

        Array.from(fighter).forEach(element => {
            fighters.push(JSON.parse(element.getAttribute("data-info")));
        });

        return Array.from(fighters).find(element => element.id == randomNum);
    }

    _imgClickHandler() {
        Array.from(fighter).forEach(element => {
            element.addEventListener("click", (e) => {
                this._clearResults();
                let info = JSON.parse(element.getAttribute("data-info"));
                
                let leftSide = document.querySelector("#firstSide");
                let side = 0;
                if (leftSide.contains(element)) {
                    side = 0;
                }
                else {
                    side = 1;
                }
                this._tryChooseCat(info, side);
                this._checkIfBothChecked();
            })
        }
        );
    }

    _tryChooseCat(info, side) {
        if (side == 0) {
            if (rightSelected[info.id - 1])
                alert("Choose another cat!")
            else {
                this._changeSelected(leftSelected, info);
                this._chooseCat(info, side);
            }
        }
        else if (side == 1) {
            if (leftSelected[info.id - 1])
                alert("Choose another cat!")
            else {
                this._changeSelected(rightSelected, info);
                this._chooseCat(info, side);
            }
        }
    }

    _chooseCat(info, side) {
       image[side].src = images[info.id - 1].src;
        age[side].textContent = info.age;
        name[side].textContent = info.name;
        information[side].textContent = info.catInfo;
        wins[side].textContent = info.record.wins;
        loss[side].textContent = info.record.loss;

    }

    _checkIfBothChecked() {
        if (leftSelected.includes(true) && rightSelected.includes(true)) {
            btnFight.disabled = false;
        }
        else {
            btnFight.disabled = true;
        }
        if(leftSelected.includes(true))btnEditLeft.disabled = false;
        if(rightSelected.includes(true))btnEditRight.disabled = false;
    }
}

const obj = new CatFight();
obj.init();