import { categories } from "../data/categories";

export const ExpenseForm = () => {
    return (
        <form className="space-y-5">
            <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2">
                New expense
            </legend>

            <div className="flex flex-col gap-2">
                <label 
                    htmlFor="expenseName"
                    className="text-xl"
                >
                    Expense name:
                </label>
                <input 
                    type="text" 
                    id="expenseName"
                    placeholder="Add the name of the expense"
                    className="bg-slate-100 p-2"
                    name="expenseName"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label 
                    htmlFor="amountName"
                    className="text-xl"
                >
                    Amount:
                </label>
                <input 
                    type="text" 
                    id="amountName"
                    placeholder="Add the amount of the amount: Example: 300"
                    className="bg-slate-100 p-2"
                    name="amountName"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label 
                    htmlFor="category"
                    className="text-xl"
                >
                    Category:
                </label>
                <select 
                    id="category"
                    className="bg-slate-100 p-2"
                    name="category"
                >
                    <option value="">-- Select --</option>
                    {categories.map(category => (
                        <option 
                            key={category.id}
                            value={category.id}
                        >{ category.name }</option>
                    ))}
                </select>

                <input 
                    type="submit" 
                    className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
                    value={'Register expense'}
                />

            </div>

        </form>
    );
}
