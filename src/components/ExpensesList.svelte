<script lang="ts">
    import { expenses } from "../store";
    import AddExpense from "./AddExpense.svelte";
    import SingleExpense from "./SingleExpense.svelte";

    let searchTerm :string = "";
</script>

<div class="flex flex-col w-full space-y-4 md:w-1/2">
    <p class="text-xl underline font-semibold my-4">Expenses</p>
    <AddExpense />
    
    <input placeholder="Search expense......." bind:value={searchTerm} class="py-4 px-2 border border-gray-300 rounded-xl" />

    {#if $expenses.length == 0}
        <p class="text-center"> No expenses currently defined add using form above </p>
    {:else}
        <div>
            {#each $expenses.filter((x) => x.name.toLowerCase().includes(searchTerm.toLowerCase())) as expense}
                <SingleExpense {expense} />
            {/each}
        </div>
    {/if}
</div>
