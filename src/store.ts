import { writable } from "svelte/store";
import Expense from "./models/Expense";

let localexp = localStorage.getItem("exp")
let localbudg = localStorage.getItem("budg")

let exp: Expense[]=[];
let budg: number=1000;


//check if there is any expenses saved locally and read them else create new

if (!!localexp && JSON.parse(localexp).length>0) {
    let data = JSON.parse(localexp);
    for (let obj of data) {
        exp.push(new Expense(obj['name'], obj['price']));
    }    
} else{
    exp=[new Expense("Food",1000),new Expense("Entertainment",1000),new Expense("Rent",1000)]
}


//check if there is any budget saved locally 

if (!!localbudg) {
    budg = JSON.parse(localbudg)
}

export const expenses = writable(exp);
export const budget = writable(budg);
export const showModal = writable(false);
export const alert = writable('');


