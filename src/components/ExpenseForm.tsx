import { categories } from "../data/categories";
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'
import { ChangeEvent, FormEvent, useState } from "react";
import type { DraftExpense, Value } from "../types";
import { ErrorMessage } from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";


export const ExpenseForm = () => {

    const [expense, setExpense] = useState<DraftExpense>({
        amount: 0,
        expenseName: '',
        category: '',
        date: new Date(),
    });

    const [error, setError] = useState('');

    const { dispatch } = useBudget();

    const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {

        const {name, value} = event.target;
        const isAmountField = ['amount'].includes(name);

        setExpense({
            ...expense,
            [name]: isAmountField ? +value : value, 
        });

    }

    const handleChangeDate = (value: Value) => {
        setExpense({
            ...expense,
            date: value,
        });
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        
        if (Object.values(expense).includes('')) {
            setError('All fields are required.');
            return;
        }

        setError('');
        dispatch({type: 'add-expense', payload: { expense }});
        setExpense({
            amount: 0,
            expenseName: '',
            category: '',
            date: new Date(),
        });

    }


    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2">
                New expense
            </legend>

            {error && <ErrorMessage>{error}</ErrorMessage>}

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
                    value={expense.expenseName}
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label 
                    htmlFor="amount"
                    className="text-xl"
                >
                    Amount:
                </label>
                <input 
                    type="number" 
                    id="amount"
                    placeholder="Add the amount of the amount: Example: 300"
                    className="bg-slate-100 p-2"
                    name="amount"
                    value={expense.amount}
                    onChange={handleChange}
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
                    value={expense.category}
                    onChange={handleChange}
                >
                    <option value="">-- Select --</option>
                    {categories.map(category => (
                        <option 
                            key={category.id}
                            value={category.id}
                        >{ category.name }</option>
                    ))}
                </select>

                <div className="flex flex-col gap-2">
                <label 
                    htmlFor="amountDate"
                    className="text-xl"
                >
                    Amount date:
                </label>
                <DatePicker 
                    id="amountDate"
                    className="bg-slate-100 p-2 border-0"
                    value={expense.date}
                    onChange={handleChangeDate}
                />
            </div>

                <input 
                    type="submit" 
                    className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
                    value={'Register expense'}
                />

            </div>

        </form>
    );
}
