//chalenge one

function ageInDay() {

   var birthyear = prompt('what year were you born??');
   var ageInDayss = (2022 - birthyear ) * 365;
   var h1 = document.createElement('h1');
   var textAnswer = document.createTextNode('you are' + ageInDayss + 'days old');
   h1.setAttribute('id', 'ageInDay');
   h1.appendChild(textAnswer);
   document.getElementById('flex-box-result').appendChild(h1);
   

}

function reset() {
    document.getElementById('ageInDay').remove();
}
//chalenge two (cat)

function generateCat() {
    var image =document.createElement('img');
    var div =document.getElementById('div-cat');
    image.src = "https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/344.gif"
    div.appendChild(image);
}

