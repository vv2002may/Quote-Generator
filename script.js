let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person-name')

const quotes = [
   {
      quote: `The greatest glory in living lies not in never falling, but in rising every time we fall.`,
      person: `Nelson Mandela`,
   },
   {
      quote: `The way to get started is to quit talking and begin doing.`,
      person: `Walt Disney`,
   },
   {
      quote: `The future belongs to those who believe in the beauty of their dreams.`,
      person: `Eleanor Roosevelt`,
   },
   {
      quote: `Tell me and I forget. Teach me and I remember. Involve me and I learn.`,
      person: `Benjamin Franklin`,
   }
];

// const quotes =['The greatest glory in living lies not in never falling, but in rising every time we fall.','The way to get started is to quit talking and begin doing.']

btn.addEventListener('click', function () {
   let random = Math.floor(Math.random() * quotes.length);
   quote.innerText = quotes[random].quote;
   person.innerText = quotes[random].person;
})