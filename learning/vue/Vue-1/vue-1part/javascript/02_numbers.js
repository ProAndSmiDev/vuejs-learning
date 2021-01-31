// Number
//const num = 42 // integer
//const float = 42.42 // floar
//const pow = 10e3 // 10000
//console.log('10e3:', pow)
//
//console.log('MAX_SAFE_INTEGER:', Number.MAX_SAFE_INTEGER)
//console.log('Math.pow 53:', Math.pow(2, 53) - 1)
//console.log('MAX_SAFE_INTEGER:', Number.MAX_SAFE_INTEGER)
//console.log('MAX_VALUE:', Number.MAX_VALUE)
//console.log('MIN_VALUE:', Number.MIN_VALUE)
//console.log('NEGATIVE_INFINITY:', Number.NEGATIVE_INFINITY)
//console.log('POSITIVE_INFINITY:', Number.POSITIVE_INFINITY)
//console.log('1 / 0:', 1 / 0)
//console.log('NAN:', Number.NaN)
//const weird = 2 / undefined
//console.log('isNaN 2 / undefined:', isNaN(weird))
//console.log('isFinite(42):', Number.isFinite(42))
//
//const stringInt = '42'
//const stringFloat = '42.42'
//
//console.log(Number.parseInt(stringInt) + 2)
//console.log(parseInt(stringInt) + 2)
//console.log(Number(stringInt) + 2)
//console.log(+stringInt + 2)
//
//console.log(parseInt(stringFloat)) // 42
//console.log(parseFloat(stringFloat))
//console.log(+stringFloat)
//
//console.log(0.4 + 0.2)
//console.log(parseFloat((0.4 + 0.2).toFixed(1)))
//console.log(+(0.4 + 0.2).toFixed(1))
//console.log((2 / 5) + (1 / 5)) // failed
//
//// BigInt
//console.log(99999999999999999999999999999999999999999.656) // error
////console.log(10n - 4) // error
//console.log(10n - BigInt(4))
//console.log(10n / 4n) // 2n

// Math
//console.log(Math.E)
//console.log(Math.PI)
//
//console.log(Math.sqrt(25)) // 5
//console.log(Math.pow(5, 2)) // 25
//console.log(Math.abs(-42)) // 42
//console.log(Math.max(-42, 42, 12, 30, 23, 11, 422)) // 422
//console.log(Math.min(-42, 42, 12, 30, 23, 11, 422)) // -42
//console.log(Math.floor(4.9)) // 4
//console.log(Math.ceil(4.1)) // 5
//console.log(Math.round(4.1)) // 4
//console.log(Math.round(4.9)) // 5
//console.log(Math.trunc(4.9)) // 4 (Number.toFixed)
//console.log(Math.random())

// 4 Примеры

function getRandomBetween(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

console.log(getRandomBetween(1, 2))


