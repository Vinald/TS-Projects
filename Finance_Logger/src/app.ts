import {Invoice} from "./classes/Invoice.js"
import { Payments } from "./classes/Payments.js";
import { HasFormatter } from "./interfaces/HasFormatter";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;
//
// docOne = new Invoice('samuel', 'App', 300);
// docTwo = new Payments('okiror', 'website', 700);
//
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
//
// console.log(docs);


// Form inputs
const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// Invoice Instances
// const invOne = new Invoice('samuel', 'For a website', 500);
// const invTwo = new Invoice('vinald', 'For a Mobile App', 700);
// const invThree = new Invoice('vine', 'For a website', 500);

// Invoice list
// let invoices: Invoice[] = [];
//
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.push(invThree);

// console.log(invoices);
//
// invoices.forEach(invoice => {
//     console.log(invoice.getClient(), invoice.getDetails(), invoice.getAmount(), invoice.format())
// })

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value == "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    }else {
        doc = new Payments(toFrom.value, details.value, amount.valueAsNumber)
    }
    console.log(doc);
})