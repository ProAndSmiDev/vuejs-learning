const person = {
    name:'Vladilen',
    age: 25,
    job: 'Fullstack'
};

const op = new Proxy(person, {
   get(target, prop) {
       console.log('Getting prop', prop + '...');
       if(!(prop in target)) {
           return prop
               .split('_')
               .map(p => target[p])
               .join(' ');
       }
       return target[prop];
   },
    set(target, prop, value) {
       if (prop in target) {
           target[prop] = value;
       } else {
           throw new Error(`No ${prop} field in target`);
       }
    },
    has(target,prop) {
       if(prop in target) {
           return prop in target;
       } else {
           return prop in target;
       }
    },
    deleteProperty(target, prop) {
        console.log('Deleting...', prop);
        delete target[prop];
        console.log(target);
        return true;
    }
});

// Functions
const log = text => `Log: ${text}`;

const fp = new Proxy(log, {
   apply(target, context, args) {
//       console.log(target) // функция
//       console.log(context) // контекст функции
//       console.log(args) // массив аргументов

       console.log('Calling fn...');

       return target.apply(context, args).toUpperCase();
   }
});

// Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};

const PersonProxy = new Proxy(Person, {
   construct(target, args) {
       console.log('Construct...');

       return new Proxy(new target(...args), {
           get(t, p) {
               console.log(`Getting prop ${p}`);

               return t[p];
           }
       });
   }
});

const p = new PersonProxy('Maxim', 30);