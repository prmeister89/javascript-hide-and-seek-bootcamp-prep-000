function getFirstSelector(selector) {
return document.querySelector(selector)
}

function nestedTarget(){
return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild() {
return document.querySelector('#grand-node div div div div')
}
