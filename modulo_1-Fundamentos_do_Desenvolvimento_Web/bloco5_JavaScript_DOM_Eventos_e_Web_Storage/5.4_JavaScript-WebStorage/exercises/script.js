/*Imagine que você é a pessoa responsável por desenvolver uma página que servirá como um leitor de conteúdo escrito.
Esse conteúdo escrito pode ser uma página de livro, uma reportagem de revista ou uma nota de jornal online. Para que você não tenha que pensar no conteúdo da página, utilize este link para gerar o texto para sua página.
Até aqui, nenhuma novidade, mas essa demanda exige que você aplique preferências das pessoas leitoras na página para melhorar a experiência de leitura dessas pessoas.
As pessoas devem ter o poder de alterar:
Cor de fundo da tela;
Cor do texto;
Tamanho da fonte;
Espaçamento entre as linhas do texto;
Tipo da fonte ( Font family ).
Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.*/   

window.onload = function() {

  function backgroundColor () {
    let selectBackgroundColor = document.getElementById('backgroundColor');
    let main = document.getElementsByTagName('main')[0];
    selectBackgroundColor.addEventListener('change', function() { // change = Evento de mudança
      let selected = selectBackgroundColor.selectedOptions[0]; // sselectBackgroundColor.selectedOptions = select é um elemento representado por um objeto
      main.style.backgroundColor = selected.value; // não colocamos o selectBackgroundColor.selectedOptions direto pois ele nos da um objeto, e precisamos de uma string;
      localStorage.setItem('5.4-background', selected.value) //após usar a info, nós a guardamos para usar posteriormente
    })
  }
  backgroundColor();

  function backgroundColorSaved () {
    let savedBackground = localStorage.getItem('5.4-background')
    let main = document.getElementsByTagName('main')[0];
    main.style.backgroundColor = savedBackground;
  }
  backgroundColorSaved ()



  function colorText () {
    let colorText = document.getElementById('colorText');
    let main = document.getElementsByTagName('main')[0];
    colorText.addEventListener('change', function() {
      let selected = colorText.selectedOptions[0];
      main.style.color = selected.value;
      localStorage.setItem('5.4-color', selected.value)
    })
  }
  colorText();

  function colorTextSaved () {
    let savedColorText = localStorage.getItem('5.4-color')
    let main = document.getElementsByTagName('main')[0];
    main.style.color = savedColorText;
  }
  colorTextSaved ()



  function fontFamily() {
    let elementFontFamily = document.getElementById('fontFamily');
    let main = document.getElementsByTagName('main')[0];
    elementFontFamily.addEventListener('change', function() {
      let selected = elementFontFamily.selectedOptions[0].value;
      console.log(selected);
      main.style.fontFamily = `${selected}`;
      localStorage.setItem('5.4-fontFamily', `${selected}`)
    })
  }
  fontFamily()

  function fontFamilySaved() {
    let savedElementFontFamily = localStorage.getItem('5.4-fontFamily');
    let main = document.getElementsByTagName('main')[0];
    main.style.fontFamily = savedElementFontFamily;
  }
  fontFamilySaved()



  function fontSize () {
    let fontSize = document.querySelector('input[name="fontSize"]');
    let main = document.getElementsByTagName('main')[0];
    fontSize.addEventListener('change', function() {
      main.style.fontSize = `${fontSize.value}px`;
      localStorage.setItem('5.4-fontSize', `${fontSize.value}px`)
    })
  }
  fontSize();

  function fontSizeSaved () {
    let savedFontSize = localStorage.getItem('5.4-fontSize')
    let main = document.getElementsByTagName('main')[0];
    main.style.fontSize = savedFontSize;
  }
  fontSizeSaved ()


  function inputLineHeight() {
    let elementLineHeight = document.querySelector('input[name="lineHeight"]');
    let content = document.querySelector('.content')
    elementLineHeight.addEventListener('change', function() {
      content.style.lineHeight = elementLineHeight.value;
      localStorage.setItem('5.4-lineHeight', elementLineHeight.value)
    })
  }
  inputLineHeight()

  function savedInputLineHeight() {
    let savedInputLineHeight = localStorage.getItem('5.4-lineHeight');
    let content = document.querySelector('.content')
    content.style.lineHeight = savedInputLineHeight;
  }
  savedInputLineHeight()
}
