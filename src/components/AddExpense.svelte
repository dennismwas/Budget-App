<script lang="ts">
    import { expenses,alert,budget } from "../store";
    import Expense from "../models/Expense";

    const setAlert=(msg:string)=>{
        $alert=msg;
        setTimeout(()=>$alert="",3000);
    }

    const addExpense = (e : SubmitEvent) => {
       const formData=new FormData(e.target as HTMLFormElement);

       const name :string =formData.get('exp') as string;
       const cost :number= parseFloat(formData.get('cost') as string);

       const expense=new Expense(name,cost); 
       
       //check if expense exists
       const exists=$expenses.find((x)=>x.name.toLowerCase()==expense.name.toLowerCase());
    

       //check current total expenses prices
       const existingExpenses=$expenses.reduce((x,y)=>x+y.price,0);

       console.log(typeof(existingExpenses))
       console.log(typeof(expense.price));
       console.log(existingExpenses+expense.price);

        if(exists){
            setAlert("Expense already exists");
        }else if(existingExpenses+expense.price > $budget){
            setAlert("The budget will over exceed");
        }
        else{
            $expenses = [expense, ...$expenses];
        }

        (e.target as unknown as HTMLFormElement).reset();
    };
</script>

<div class="flex flex-col border border-gray-400 p-4  my-4">
    <p class="text-xl">Add expense</p>
    <form
        class="flex rounded-xl flex-col md:flex-row space-y-3 space-x-0 md:space-y-0 md:space-x-2 my-2"
        on:submit|preventDefault={addExpense}
    >
        <div>
            <p>Name</p>
            <input
                type="text"
                name="exp"
                required
                class="px-3 py-1 border text-black rounded-xl"
            />
        </div>

        <div>
            <p>Cost</p>
            <input
                type="number"
                step="0.01"
                name="cost"
                required
                class="px-3 py-1 border text-black rounded-xl"
            />
        </div>

        <button
            type="submit"
            class="bg-blue-500 rounded-xl text-white px-4 py-2"
        >
            Add</button
        >
    </form>
</div>
