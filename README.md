# nominal-bilangan
Library ini akan merubah angka menjadi bilangan dalam Bahasa Indonesia. Misal, 1000000 menjadi '1 Juta'

## Cara Penggunaan

#### Install package

``` npm install nominal-bilangan```

#### Penggunaan

```
const bilangan = require('nominal-bilangan')

console.log(bilangan(1000000)) // '1 Juta'
console.log(bilangan(1250000000)) // '1,25 Milyar'
```