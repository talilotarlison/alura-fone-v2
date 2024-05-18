//https://stackoverflow.com/questions/15148659/how-can-i-use-queryselector-on-to-pick-an-input-element-by-name

// https://www.javascriptprogressivo.net/2019/01/Eventos-Teclado-onkeydown-onkeyup-onkeypress-Tutorial.html

//https://pt.stackoverflow.com/questions/50862/como-obter-a-tecla-pressionada

//https://www.w3schools.com/jsref/obj_keyboardevent.asp

//https://developer.mozilla.org/pt-BR/docs/Web/API/Element/keypress_event

let tela = document.querySelector("input[type=tel]");
//tela.value = 1313

let btns = document.querySelectorAll("input[type=button]");
//console.log(btns)
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    tela.value += e.target.value;
  });
});

window.onload = document.addEventListener("keypress", (e) => {
  console.log(e.key);
  teclaApertadaTeste(e.key);
});

function teclaApertadaTeste(key) {
  var num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "*", "#"];
  if (num.includes(key)) {
    tela.value += key;
  }else{
      console.error(`Tecla invalida`);
  }
}

function teclaApertada(key) {
  const teclaPress = key;
  switch (teclaPress) {
    case "0":
      tela.value += key;
      break;
    case "1":
      tela.value += key;
      break;
    case "2":
      tela.value += key;
      break;
    case "3":
      tela.value += key;
      break;
    case "4":
      tela.value += key;
      break;
    case "5":
      tela.value += key;
      break;
    case "6":
      tela.value += key;
      break;
    case "7":
      tela.value += key;
      break;
    case "8":
      tela.value += key;
      break;
    case "9":
      tela.value += key;
      break;
    case "#":
      tela.value += key;
      break;
    case "*":
      tela.value += key;
      break;
    default:
      console.error(`Tecla invalida`);
  }
}
