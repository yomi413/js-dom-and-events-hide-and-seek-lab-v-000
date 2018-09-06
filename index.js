function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

const increaseRankBy = function(n) {
  let list = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < list.length; i++) {
    return list[i].innerHTML = parseInt(list[i].innerHTML) + 1
  }
}
