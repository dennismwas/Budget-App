<script lang="ts">
    import { showModal, budget } from "../store";
    let dialog: HTMLDialogElement;

    $: if (dialog && $showModal) dialog.showModal();
    
    const setBudget = (e:SubmitEvent) => {
        const formdata=new FormData(e.target as HTMLFormElement);
        $budget = parseFloat(formdata.get('budget') as string);
        dialog.close();
    };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
    bind:this={dialog}
    on:close={() => ($showModal = false)}
    on:click|self={() => dialog.close()}
>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        on:click|stopPropagation
        class="flex flex-col items-center justify-center p-8 rounded-lg space-"
    >
        <p class="font-bold underline text-lg">Enter budget</p>
        <hr />

        <form
            class="flex flex-col space-y-4"
            on:submit|preventDefault={setBudget}
        >
            <input
                type="number"
                step="0.01"
                min="0"
                name="budget"
                class="mx-auto px-3 py-1 border"
            />
            <button
                type="submit"
                class="px-4 py-2 bg-blue-500 text-white rounded-xl"
                >Set Budget</button
            >
        </form>

        <hr />
        <!-- svelte-ignore a11y-autofocus -->
    </div>
</dialog>
