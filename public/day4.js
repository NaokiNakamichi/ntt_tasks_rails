console.log('Hello from day3.js');

var scores = [100,90,80,70,60];
sum = 0;

for(i=0;i<scores.length;i++){
    sum += scores[i]
}

var average = sum / scores.length;
console.log(sum);
console.log(average);

function show() {
    var result = document.getElementById('result');
    console.log(result.innerText);

    var elements = document.getElementsByName('input_form_by_name');
    result.innerText = elements[0].value;
    console.log(elements[0].value);
  }



function append(){
    var li = document.createElement('li');
    var text = document.createTextNode("追加してます");
    li.appendChild(text);
    var listsElement = document.getElementById( "list" ) ;
    listsElement.appendChild(li);

}

function remove(){
    var parentElement = document.getElementsByClassName("container_standard")[0];
    var elements = parentElement.getElementsByClassName("item");

    var removeIndex = getRandomInt(elements.length);
    if (elements.length != 0){
        parentElement.removeChild(elements[removeIndex]);
    }
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  