module.exports = (nominal) => {
  let bilangan = null
  let koma = null

  let arrayNominal = ('' + parseInt(nominal)).split('').map(Number)

  if (arrayNominal.length > 3 && arrayNominal.length <= 6) {
    bilangan = 'Ribu'
    koma = arrayNominal.slice(arrayNominal.length - 3).slice(0, 2).join('')
    arrayNominal.splice(arrayNominal.length - 3, arrayNominal.length - 1)
  }

  if (arrayNominal.length > 6 && arrayNominal.length <= 9) {
    bilangan = 'Juta'
    koma = arrayNominal.slice(arrayNominal.length - 6).slice(0, 2).join('')
    arrayNominal.splice(arrayNominal.length - 6, arrayNominal.length - 1)
  }

  if (arrayNominal.length > 9 && arrayNominal.length <= 12) {
    bilangan = 'Milyar'
    koma = arrayNominal.slice(arrayNominal.length - 9).slice(0, 2).join('')
    arrayNominal.splice(arrayNominal.length - 9, arrayNominal.length - 1)
  }

  if (arrayNominal.length > 12 && arrayNominal.length <= 15) {
    bilangan = 'Trilyun'
    koma = arrayNominal.slice(arrayNominal.length - 12).slice(0, 2).join('')
    arrayNominal.splice(arrayNominal.length - 12, arrayNominal.length - 1)
  }

  return `${arrayNominal.join('')},${koma} ${bilangan}`
}