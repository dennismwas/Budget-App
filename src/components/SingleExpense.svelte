<script lang="ts">
    import { expenses } from '../store';
    import formatCurrency from '../functions/formatCurrency.ts';
    import Expense from '../models/Expense.ts';

    export let expense :Expense;

    const removeExpense=()=>$expenses=[...$expenses.filter(x=>x.name!=expense.name)];
    
    const capitalize=(str:string)=>`${str[0].toUpperCase()}${str.substring(1,str.length)}`


</script>


<div class="flex flex-row text-base items-center justify-center border border-gray-200 p-4  ">
    <p>{capitalize(expense.name)}</p>
    <p class="ml-auto">{formatCurrency(expense.price)}</p>
    <button on:click={removeExpense} class="ml-auto bg-black text-white h-6 w-6 rounded-3xl text-base">x</button>
</div>