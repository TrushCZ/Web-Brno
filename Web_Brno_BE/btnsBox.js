// btn paragraph

document.querySelector('.btnP').addEventListener('click', () => {
    let textarea = document.querySelector('.createArticle_Form_text')
  
    let startSelection = textarea.selectionStart
    let endSelection = textarea.selectionEnd
  
    let textBeforeSelection = textarea.value.substring(0, startSelection)
    let selectedText = textarea.value.substring(startSelection, endSelection)
    let textAfterSelection = textarea.value.substring(endSelection, textarea.value.length)
  
    let newText = '<p>' + selectedText + '</p>'
  
    textarea.value = textBeforeSelection + newText + textAfterSelection
  
    textarea.selectionStart = startSelection
    textarea.selectionEnd = startSelection + newText.length
  })

//   btn Header2

document.querySelector('.btnH2').addEventListener('click', () => {
    let textarea = document.querySelector('.createArticle_Form_text')
  
    let startSelection = textarea.selectionStart
    let endSelection = textarea.selectionEnd
  
    let textBeforeSelection = textarea.value.substring(0, startSelection)
    let selectedText = textarea.value.substring(startSelection, endSelection)
    let textAfterSelection = textarea.value.substring(endSelection, textarea.value.length)
  
    let newText = '<h2>' + selectedText + '</h2>'
  
    textarea.value = textBeforeSelection + newText + textAfterSelection
  
    textarea.selectionStart = startSelection
    textarea.selectionEnd = startSelection + newText.length
  })

//   htn Header 3

document.querySelector('.btnH3').addEventListener('click', () => {
    let textarea = document.querySelector('.createArticle_Form_text')
  
    let startSelection = textarea.selectionStart
    let endSelection = textarea.selectionEnd
  
    let textBeforeSelection = textarea.value.substring(0, startSelection)
    let selectedText = textarea.value.substring(startSelection, endSelection)
    let textAfterSelection = textarea.value.substring(endSelection, textarea.value.length)
  
    let newText = '<h3>' + selectedText + '</h3>'
  
    textarea.value = textBeforeSelection + newText + textAfterSelection
  
    textarea.selectionStart = startSelection
    textarea.selectionEnd = startSelection + newText.length
  })

//   btn link

document.querySelector('.btnLINK').addEventListener('click', () => {
    let textarea = document.querySelector('.createArticle_Form_text')
  
    let startSelection = textarea.selectionStart
    let endSelection = textarea.selectionEnd
  
    let textBeforeSelection = textarea.value.substring(0, startSelection)
    let selectedText = textarea.value.substring(startSelection, endSelection)
    let textAfterSelection = textarea.value.substring(endSelection, textarea.value.length)
  
    let newText = '<a href="">' + selectedText + '</a>'
  
    textarea.value = textBeforeSelection + newText + textAfterSelection
  
    textarea.selectionStart = startSelection
    textarea.selectionEnd = startSelection + newText.length
  })

//   btn italics

document.querySelector('.btnI').addEventListener('click', () => {
    let textarea = document.querySelector('.createArticle_Form_text')
  
    let startSelection = textarea.selectionStart
    let endSelection = textarea.selectionEnd
  
    let textBeforeSelection = textarea.value.substring(0, startSelection)
    let selectedText = textarea.value.substring(startSelection, endSelection)
    let textAfterSelection = textarea.value.substring(endSelection, textarea.value.length)
  
    let newText = '<em>' + selectedText + '</em>'
  
    textarea.value = textBeforeSelection + newText + textAfterSelection
  
    textarea.selectionStart = startSelection
    textarea.selectionEnd = startSelection + newText.length
  })

//   btn bold

document.querySelector('.btnB').addEventListener('click', () => {
    let textarea = document.querySelector('.createArticle_Form_text')
  
    let startSelection = textarea.selectionStart
    let endSelection = textarea.selectionEnd
  
    let textBeforeSelection = textarea.value.substring(0, startSelection)
    let selectedText = textarea.value.substring(startSelection, endSelection)
    let textAfterSelection = textarea.value.substring(endSelection, textarea.value.length)
  
    let newText = '<b>' + selectedText + '</b>'
  
    textarea.value = textBeforeSelection + newText + textAfterSelection
  
    textarea.selectionStart = startSelection
    textarea.selectionEnd = startSelection + newText.length
  })

//  btn UL

document.querySelector('.btnUL').addEventListener('click', () => {
    let textarea = document.querySelector('.createArticle_Form_text')
  
    let startSelection = textarea.selectionStart
    let endSelection = textarea.selectionEnd
  
    let textBeforeSelection = textarea.value.substring(0, startSelection)
    let selectedText = textarea.value.substring(startSelection, endSelection)
    let textAfterSelection = textarea.value.substring(endSelection, textarea.value.length)
  
    let newText = '<ul>' + selectedText + '</ul>'
  
    textarea.value = textBeforeSelection + newText + textAfterSelection
  
    textarea.selectionStart = startSelection
    textarea.selectionEnd = startSelection + newText.length
  })

//   btn OL

document.querySelector('.btnOL').addEventListener('click', () => {
    let textarea = document.querySelector('.createArticle_Form_text')
  
    let startSelection = textarea.selectionStart
    let endSelection = textarea.selectionEnd
  
    let textBeforeSelection = textarea.value.substring(0, startSelection)
    let selectedText = textarea.value.substring(startSelection, endSelection)
    let textAfterSelection = textarea.value.substring(endSelection, textarea.value.length)
  
    let newText = '<ol>' + selectedText + '</ol>'
  
    textarea.value = textBeforeSelection + newText + textAfterSelection
  
    textarea.selectionStart = startSelection
    textarea.selectionEnd = startSelection + newText.length
  })

//   btn li

document.querySelector('.btnLI').addEventListener('click', () => {
    let textarea = document.querySelector('.createArticle_Form_text')
  
    let startSelection = textarea.selectionStart
    let endSelection = textarea.selectionEnd
  
    let textBeforeSelection = textarea.value.substring(0, startSelection)
    let selectedText = textarea.value.substring(startSelection, endSelection)
    let textAfterSelection = textarea.value.substring(endSelection, textarea.value.length)
  
    let newText = '<li>' + selectedText + '</li>'
  
    textarea.value = textBeforeSelection + newText + textAfterSelection
  
    textarea.selectionStart = startSelection
    textarea.selectionEnd = startSelection + newText.length
  })

//   btn img

    document.querySelector('.btnIMG').addEventListener('click', () => {
    let textarea = document.querySelector('.createArticle_Form_text')
  
    let cursorPos = textarea.selectionStart
  
    let textBeforeCursor = textarea.value.substring(0, cursorPos)
    let textAfterCursor = textarea.value.substring(cursorPos, textarea.value.length)
  
    textarea.value = textBeforeCursor + "<img src='' alt='' />" + textAfterCursor
  
    textarea.selectionStart = cursorPos + 1
    textarea.selectionEnd = cursorPos + 1
  })







  





  
 