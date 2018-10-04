import test from 'ava'
import bilangan from '.'

test('[4000] should output 4 Ribu', t => {
  t.is(bilangan(4000), '4 Ribu')
})

test('[31337] should output 31 Ribu', t => {
  t.is(bilangan(31337), '31,33 Ribu')
})

test('[170000] should output 170 Ribu', t => {
  t.is(bilangan(170000), '170 Ribu')
})

test('[1000000] should output 1 Juta', t => {
  t.is(bilangan(1000000), '1 Juta')
})

test('[12000000] should output 12 Juta', t => {
  t.is(bilangan(12000000), '12 Juta')
})

test('[3000000000] should output 3 Milyar', t => {
  t.is(bilangan(3000000000), '3 Milyar')
})

test('[1250000000] should output 1,25 Milyar', t => {
  t.is(bilangan(1250000000), '1,25 Milyar')
})

test('[9000000000000] should output 9 Trilyun', t => {
  t.is(bilangan(9000000000000), '9 Trilyun')
})


