const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
const $result = document.getElementById('result');

let beforeText = "";    //演算子の前の数
let nowText = "";     //演算子の後の数
let operator = "";      //何の演算子が入力されたのか
let afterFirstFlag = true;
let answer = 0;
let equalFlag = false;
let clearFlag = false;

const allClear = () => {
    beforeText = "";
    nowText = "";
    operator = "";
    afterFirstFlag = true;
    answer = 0;
    equalFlag = false;
    clearFlag = false;
}

const clear = () => {
    nowText = "";
    afterFirstFlag = true;
    answer = 0;
    clearFlag = true;    
}

const calculation = (operator) => {
    if(operator === "+") {
        answer = Number(beforeText) + Number(nowText);
    } else if(operator === "-") {
        answer = Number(beforeText) - Number(nowText);
    } else if(operator === "*") {
        answer = Number(beforeText) * Number(nowText);
    } else if(operator === "/") {
        answer = Number(beforeText) / Number(nowText);
    }

    if((operator === "/") && (answer.toString().length > 9)) {
        return answer.toPrecision(9);
    } else {
        return String(answer);
    }
}

const buttonPressed = (event) => {
    const text = event.target.textContent;

    if(text === "C") {
        if(clearFlag || equalFlag) {     //ACシステム
            allClear();
        } else {
            clear();
       }
    } else if(beforeText.length < 10 && nowText.length < 10){    //画面の幅の都合上

        //%%%%%%%%%%%%%演算子が入力される前%%%%%%%%
        if(operator.length === 0){      

            if(isNaN(Number(text))) {  //数字以外が入力されたら
                if(!(text === "=")) {
                    beforeText = nowText;    //いったん表示を0に
                    operator = text;
                }
            } else {                     //数字が入力されたら追加していく
                nowText += text;
            }
        } else {    //%%%%%%%%演算子が入力された後%%%%%%%%%
            if(isNaN(Number(text))) {
                if(!(text === "=")) {
                    operator = text;
                }
            }
            if(!(isNaN(Number(text)))) {
                if(afterFirstFlag) {        //最初の数字が入力されるまでは数字を表示したままにしておく
                    nowText = text;
                    afterFirstFlag = false;
                } else {                    //演算子の後の数字入力以降はその数字を表示していく
                    nowText += text;
                }
            }
            if (text === "=") {
                equalFlag = true;
                nowText = calculation(operator);
            } 
        }
    }
    $result.textContent = nowText;
}

let buttonIndex = 0;
while(buttonIndex < buttonLength){
    $button[buttonIndex].addEventListener('click', buttonPressed);
    buttonIndex++;
}