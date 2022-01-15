console.log('start');

let textValue = document.getElementById("textValue");
let buttonRestart = document.getElementById("restart");
let select = document.getElementById("select");

let status = "notStarted";//notStarted showCountDown showText

const text = "Однажды в 1996 году один из моих детей пришел домой со школы разочарованным. Ему наскучила учеба, он устал от нее. «Почему я должен вкладывать свое время в изучение предметов, которые никогда не пригодятся мне в реальной жизни?» – протестовал он. Не подумав, я ответила: «Потому, что если у тебя не будет хороших знаний, ты не попадешь в колледж». «Меня не особенно волнует, пойду ли я в колледж, я собираюсь быть богатым» – сказал он. «Если ты не закончишь колледж, ты не получишь хорошей работы» – возразила я с оттенком паники и материнской озабоченности, – «А если у тебя не будет хорошей работы, как ты планируешь разбогатеть?» Мой сын ухмыльнулся и медленно покачал головой с выражением скуки на лице. Подобный разговор происходил у нас не в первый раз. Он наклонил голову и закатил глаза. Слова материнской мудрости снова упали на мертвую почву. Будучи сообразительным и волевым, мой сын всегда был вежливым и воспитанным молодым человеком.";
let resTextArray = text.split(" ");

textValue.innerHTML = "Tap to start";

let startShowText = () => {
  status = "showText";
  buttonRestart.disabled = false;
  select.disabled = true;
  
  let selectValue = select.value;
  let speed = 350;
  switch (selectValue) {
    case "1":
      speed = 350;
      break;
    case "2":
      speed = 250;
      break;
    case "3":
      speed = 150;
      break;
    default:
      speed = 350;
  }
  console.log(selectValue + "_" + speed);
  
  let startIndex = 0;
  let endIndex = resTextArray.length-1;
  let currentIndex = 0;
  let intervalUpdateText = setInterval( () => {
    if(currentIndex >= endIndex || status == "notStarted") {
      buttonRestart.disabled = true;
      select.disabled = false;
      clearInterval(intervalUpdateText);
      console.log('index END');
      status = "notStarted";
    }
    //console.log(`Index _${resTextArray[currentIndex]}`);
    textValue.innerHTML = `${resTextArray[currentIndex]}`;
    currentIndex++;
    
    if(status == "notStarted") {
      textValue.innerHTML = "Tap to start";   
    }
  }, speed);  
}

let startCountdown = () => {
  console.log('Countdown');
  status = "showCountDown";
  
  let current = 3;
  let countDown = setInterval( () => {
    if(current === 0) {
      clearInterval(countDown);
      startShowText();
    } else {
      textValue.innerHTML = `${current}`;
      current--;  
    }
  }, 1000);
}

document.getElementById("content").addEventListener("click", ()=> {
  console.log("click");
  if(status == "notStarted") {
    startCountdown();   
  } else if(status == "showCountDown") {
    console.log("showCountDown");  
  } else {
    console.log("pause");                                                
  }
});

buttonRestart.addEventListener("click", ()=> {
  console.log("asd");
  status = "notStarted";
});