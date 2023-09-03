<script lang="ts">
  import { Pie } from "svelte-chartjs";
  import { expenses } from "../store.ts";
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
  } from "chart.js";

  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

  $:data = {
      labels: $expenses.map((x) => x.name),
      datasets: [
        {
          label: "Expenses",
          data: $expenses.map((x) => x.price),
          backgroundColor: $expenses.map((x)=>x.color),
          hoverOffset: 4,
        },
      ],
};


</script>

<div class="h-70 w-full mx-auto md:w-1/3">
  <p class="text-xl text-center underline font-semibold my-4">Expense Chart</p>
  {#if $expenses.length == 0}
    <p class="text-center">No expenses currently defined</p>
  {:else}
    <div>
      <Pie {data} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  {/if}
</div>
