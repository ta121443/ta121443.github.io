const quiz = [
    {
        question : 'なんのサークル？',
        answers : ['テニス', 'カバディ', 'セパタクロー', 'モルック'],
        correct : 'テニス'
    }, {
        question : '人数は？',
        answers : ['30人', '50人', '100人', '200人'],
        correct : '200人'
    }, {
        question : '一年間で開催される合宿の回数は？',
        answers : ['2回', '3回', '4回', '5回'],
        correct : '5回'
    }, {
        question : 'あまりぃず御用達の宿の名前は？',
        answers : ['白木荘', 'ホテル山田', 'ホテル桃山', '城之内荘'],
        correct : '城之内荘'
    }, {
        question : '冬合宿で行うのは？',
        answers : ['テニス', 'スノボ', '川下り', 'ボードゲーム'],
        correct : 'スノボ'
    }

]

let quizIndex = 0;
const quizLength = quiz.length;
let score = 0;

//選択肢部分の設定
const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;

const setupQuiz = () =>{
    document.getElementById('question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

//クリックしたときの正誤判定
const clickHandler = (e) => {
    if(e.target.textContent == quiz[quizIndex].correct) {
        window.alert('正解!');
        score++;
    } else {
        window.alert('不正解！');
    }
    quizIndex++;
    if(quizIndex < quizLength) {
        setupQuiz();
    } else {
        let accuracy = score / quizLength;
        window.alert('あなたの得点は、' + accuracy * 100 + '点です！');
    }
}
let hundleIndex = 0;
while(hundleIndex < buttonLength){
    $button[hundleIndex].addEventListener('click', (e) => {
        clickHandler(e);
    })
    hundleIndex++;    
}