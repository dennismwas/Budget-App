<script lang="ts">
  import ExpensesList from "./components/ExpensesList.svelte";
  import TopCards from "./components/TopCards.svelte";
  import ExpenseChart from "./components/ExpenseChart.svelte";
  import { alert, expenses, budget } from "./store";
  import Modal from "./components/Modal.svelte";
  import { onDestroy } from "svelte";


  //monitor any change and save locally for next time usage
  $: localStorage.setItem("expenses", JSON.stringify($expenses));
  $: localStorage.setItem("budget", JSON.stringify($budget));



</script>

<main class="flex flex-col items-center justify-center mb-16">
  <Modal />
  <div class="mx-2">
    <p class="text-2xl underline text-center  font-bold">Budget App</p>
    <TopCards />
    {#if $alert}
      <p class="px-3 py-1 bg-red-400 text-white text-center rounded-lg">
        {$alert}
      </p>
    {/if}
    <div class="flex flex-wrap space-x-4 space-y-4 md:space-x-0 md:space-y-0">
      <ExpensesList />
      <ExpenseChart />
    </div>
  </div>

  <p class="bg-blue-400 m-0 text-white text-lg fixed bottom-0 text-center w-full py-2">
    Made by Vasanth
  </p>
</main>

<style>
</style>
