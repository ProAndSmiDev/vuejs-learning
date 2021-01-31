// Event Loop (Async)
//const timeout = setTimeout(()=>{
//    console.log('After timeout')
//}, 2500)
//
//clearTimeout(timeout) // сбрасывает таймаут, не вызывает его
//
//const interval = setInterval(() => {
//    console.log('After timeout')
//}, 1000)
//
//clearInterval(interval) // сбрасывает интервал, прекращает его

//const delay = (callback, wait = 1000) => {
//    setTimeout(callback, wait)
//}
//
//delay(() => {
//    console.log('after 2 seconds')
//}, 2000) // timeout = delay

// Promises
const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve() // success command
            reject('Что-то пошло не так, повторите запрос') // info about error
        }, wait)
    })

    return promise
}

//delay(2500)
//    .then(() => {
//        console.log('After 2 seconds')
//    }) // successed
//    .catch(err => console.error(err)) // failed
//    .finally(() => console.log('Finally')) // finished

const getData = () => new Promise(resolve => resolve([1, 1, 2, 3, 5, 8, 13]))

getData().then(data => console.log(data)) // выводит массив чисел

async function asyncExample() {
    try {
        await delay(3000)
        const data = await getData();

        console.log(data);
    }
    catch (e) {
        console.log(e)
    }
    finally {
        console.log('finally')
    }
}

asyncExample()