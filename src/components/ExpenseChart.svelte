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
  import { onDestroy } from "svelte";

  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
  let data = {};

  function random_rgb() {
    const o = Math.random;
    const g=Math.trunc;
    const s = 255;
    return "rgb(" + g(o() * s)+ "," +g(o() * s) + "," + g(o() * s) +")";
  }

  const generateNColors = (n) => {
    let x = [];
    for (let i = 1; i <= n; i++) {
      x.push(random_rgb());
    }
    return x;
  };

  let colors = [];

  const unsub = expenses.subscribe((d) => {
    let addedElements = d.length - colors.length;
    colors = [...generateNColors(addedElements), ...colors];

    data = {
      labels: d.map((x) => x.name),
      datasets: [
        {
          label: "Expenses",
          data: d.map((x) => x.price),
          backgroundColor: colors,
          hoverOffset: 4,
        },
      ],
    };
  });

  onDestroy(() => unsub());
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
