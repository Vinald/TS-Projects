import { Invoice } from "./classes/Invoice.js";
import { Payments } from "./classes/Payments.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

// Form inputs
const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

// Adding event listener to form
form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    let values: [string, string, number] = [toFrom.value, details.value, amount.valueAsNumber];
    if (values.some(value => value === "")) {
        alert("Please fill in all fields.");
        return;
    }

    let doc: HasFormatter;
    if (type.value == "invoice") {
        doc = new Invoice(...values);
    } else {
        doc = new Payments(...values);
    }

    list.render(doc, type.value, "end");
});
