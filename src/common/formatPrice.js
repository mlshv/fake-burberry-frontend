const formats = {
  USD: price => '$' + numberWithSpaces(price),
  EUR: price => '€' + numberWithSpaces(price),
  RUB: price => numberWithSpaces(price) + ' руб.'
}

function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export default function(price, currency) {
  return formats[currency](price)
}
