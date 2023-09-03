<script lang="ts">
    import InforCard from "./InforCard.svelte";
    import { budget, expenses, showModal } from "../store";
    import formatCurrency from "../functions/formatCurrency";


    $: remainingAmount=$budget - $expenses.reduce((x, y) => x + y.price, 0);
    $: spentAmount= $expenses.reduce((x, y) => x + y.price, 0);

</script>

<div
    class="flex flex-col md:flex-row items-center justify-center space-y-4 space-x-0 md:space-x-4 md:space-y-0 my-4"
>
    <InforCard>
        <div class=" flex flex-row items-center justify-center py-3 pl-4">
            <p class="text-lg">Budget: {formatCurrency($budget)}</p>
            <button
                on:click={() => ($showModal = true)}
                class="ml-auto mr-2 bg-blue-700 text-white rounded-lg px-3 py-2 text-base"
                >Edit</button
            >
        </div>
    </InforCard>

    <InforCard>
        <div class=" flex py-4 pl-4">
            <p class="text-lg">
                Remaining: {formatCurrency(remainingAmount)}
            </p>
        </div>
    </InforCard>

    <InforCard>
        <div class=" flex py-4 pl-4">
            <p class="text-lg">
                Spent: {formatCurrency(spentAmount)}
            </p>
        </div>
    </InforCard>
</div>
