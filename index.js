function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  let list = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
}

function deepestChild() {
  let children = document.getElementById('grand-node').querySelector('div')

  for (let i = 0; i < children.length; i++) {
    children[i].innerHTML = (i + 1).toString()
  }
}
