# nominal-bilangan

Library ini akan merubah nominal angka menjadi nominal beserta bilangan yang dimiliki. Misal, 1000000 menjadi '1 Juta'

## Cara Penggunaan

### Install package

```npm install nominal-bilangan```

### Penggunaan

```
const bilangan = require('nominal-bilangan')

console.log(bilangan(1000000)) // '1 Juta'
console.log(bilangan(1250000000)) // '1,25 Milyar'
```

### Test

Install `ava` ke `devDependencies`:

```
yarn install
```

Jalankan test:

```
yarn test -- --verbose # atau yarn test
```

File test berada di [`test.js`](test.js)
