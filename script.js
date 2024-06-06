'use strict'

const graph = document.querySelectorAll('.amount-graph');
const amount = document.querySelectorAll('.amount');

amount.forEach(elem => elem.classList.add('hidden'))  

graph.forEach(element =>{
    element.addEventListener('mouseover', function(){
     let amount = (element.parentElement.firstChild)
     amount.nextSibling.classList.remove('hidden')
    element.addEventListener('mouseout', function(){
        amount.nextSibling.classList.add('hidden')
    })
    })
    
})
