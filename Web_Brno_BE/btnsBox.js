// // btn header

document.querySelector('.btnH2').addEventListener('click', () => {
    let textarea = document.querySelector('.createArticle_Form_text')
  
    let startSelection = textarea.selectionStart
    let endSelection = textarea.selectionEnd
  
    let textBeforeSelection = textarea.value.substring(0, startSelection)
    let selectedText = textarea.value.substring(startSelection, endSelection)
    let textAfterSelection = textarea.value.substring(endSelection, textarea.value.length)
  
    let newText = '### ' + selectedText + ''
  
    textarea.value = textBeforeSelection + newText + textAfterSelection
  
    textarea.selectionStart = startSelection
    textarea.selectionEnd = startSelection + newText.length
  })

// //   htn Header 3

document.querySelector('.btnH3').addEventListener('click', () => {
    let textarea = document.querySelector('.createArticle_Form_text')
  
    let startSelection = textarea.selectionStart
    let endSelection = textarea.selectionEnd
  
    let textBeforeSelection = textarea.value.substring(0, startSelection)
    let selectedText = textarea.value.substring(startSelection, endSelection)
    let textAfterSelection = textarea.value.substring(endSelection, textarea.value.length)
  
    let newText = '#### ' + selectedText + ''
  
    textarea.value = textBeforeSelection + newText + textAfterSelection
  
    textarea.selectionStart = startSelection
    textarea.selectionEnd = startSelection + newText.length
  })

// //   btn link

document.querySelector('.btnLINK').addEventListener('click', () => {
    let textarea = document.querySelector('.createArticle_Form_text')
  
    let startSelection = textarea.selectionStart
    let endSelection = textarea.selectionEnd
  
    let textBeforeSelection = textarea.value.substring(0, startSelection)
    let selectedText = textarea.value.substring(startSelection, endSelection)
    let textAfterSelection = textarea.value.substring(endSelection, textarea.value.length)
  
    let newText = '[' + selectedText + '](adresa odkazu)'
  
    textarea.value = textBeforeSelection + newText + textAfterSelection
  
    textarea.selectionStart = startSelection
    textarea.selectionEnd = startSelection + newText.length
  })

// //   btn italics

document.querySelector('.btnI').addEventListener('click', () => {
    let textarea = document.querySelector('.createArticle_Form_text')
  
    let startSelection = textarea.selectionStart
    let endSelection = textarea.selectionEnd
  
    let textBeforeSelection = textarea.value.substring(0, startSelection)
    let selectedText = textarea.value.substring(startSelection, endSelection)
    let textAfterSelection = textarea.value.substring(endSelection, textarea.value.length)
  
    let newText = '*' + selectedText + '*'
  
    textarea.value = textBeforeSelection + newText + textAfterSelection
  
    textarea.selectionStart = startSelection
    textarea.selectionEnd = startSelection + newText.length
  })

// //   btn bold

document.querySelector('.btnB').addEventListener('click', () => {
    let textarea = document.querySelector('.createArticle_Form_text')
  
    let startSelection = textarea.selectionStart
    let endSelection = textarea.selectionEnd
  
    let textBeforeSelection = textarea.value.substring(0, startSelection)
    let selectedText = textarea.value.substring(startSelection, endSelection)
    let textAfterSelection = textarea.value.substring(endSelection, textarea.value.length)
  
    let newText = '**' + selectedText + '**'
  
    textarea.value = textBeforeSelection + newText + textAfterSelection
  
    textarea.selectionStart = startSelection
    textarea.selectionEnd = startSelection + newText.length
  })

// //  btn UL

document.querySelector('.btnUL').addEventListener('click', () => {
    let textarea = document.querySelector('.createArticle_Form_text')
  
    let startSelection = textarea.selectionStart
    let endSelection = textarea.selectionEnd
  
    let textBeforeSelection = textarea.value.substring(0, startSelection)
    let selectedText = textarea.value.substring(startSelection, endSelection)
    let textAfterSelection = textarea.value.substring(endSelection, textarea.value.length)
  
    let newText = '- ' + selectedText + ''
  
    textarea.value = textBeforeSelection + newText + textAfterSelection
  
    textarea.selectionStart = startSelection
    textarea.selectionEnd = startSelection + newText.length
  })

// //   btn img

    document.querySelector('.btnIMG').addEventListener('click', () => {
    let textarea = document.querySelector('.createArticle_Form_text')
  
    let cursorPos = textarea.selectionStart
  
    let textBeforeCursor = textarea.value.substring(0, cursorPos)
    let textAfterCursor = textarea.value.substring(cursorPos, textarea.value.length)
  
    textarea.value = textBeforeCursor + "![Popis obrázku](cesta/k/obrazku.jpg)" + textAfterCursor
  
    textarea.selectionStart = cursorPos + 1
    textarea.selectionEnd = cursorPos + 1
  })




  





  
 