// state: rejected - выполнено с ошибкой, result: error
// state: pending - ожидание, result: undefined
// state: fulfilled - выполнено успешно, result: resolve(value)
// в промисе может быть только один результат, либо resolve либо reject
// resolve/reject ожидают только один аргумент
// reject надо возвращать с объектом Error
// state/result прямого доступа к ним не имеем, для обработки результата мы используем then/catch/finally

//const promise = new Promise((resolve, reject) => {
//    setTimeout(() => {
//        resolve('done!')
//    }, 1000)
//})
//
//const promise2 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//        reject(new Error('Whoops!'))
//    }, 1000)
//})
//
//promise.then(
//    result => alert(result), // запустится
//    error => alert(error) // нет
//)

//promise2.then(
//    result => alert(result), // нет
//    error => alert(error) // запустится
//)

//promise2.catch(alert) // сокращенный вариант then

// при любом выполнении выполнится finally
//promise.finally(() => {
//    alert('Завершился')
//})
//promise2.finally(() => {
//    alert('Завершился второй')
//})

// example LoadScript
//function loadScript(src, callback) {
//    let script = document.createElement('script');
//    script.src = src;
//
//    script.onload = () => callback(null, script);
//    script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));
//
//    document.head.append(script);
//}

// на промисах
function loadScript(src) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

        document.head.append(script);
    })
}

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(script => alert(`${script.src} загружен!`));
promise.catch(error => alert(`Ошибка: ${error.message}`));

// example Timeout
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => {
    alert('Выполнилось через 3 секунды')
})