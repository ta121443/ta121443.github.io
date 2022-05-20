const $amount = document.getElementById('amount');
const $each = document.getElementById('each');
const $form = document.form;
const $window = document.getElementById('window');
const $form1 = document.form1;

$form1.onsubmit = function () {
    return false;
}

$form.onsubmit = function () {
    let amount = Number($form.name.value);
    let num = Number($form.num.value);

    let each = amount / num
    $amount.textContent = '合計金額は ' + amount + ' 円です。';
    if(amount % num === 0){
        $each.textContent = '一人あたりの金額は ' + each + ' 円です。';    
    } else {
        $each.textContent = '割り切れません。一人殺してください。';
    }
    $window.style.display = 'inline-block';
    return false;
    
};
