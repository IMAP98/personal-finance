import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { useBudget } from "../hooks/useBudget";

export const BudgetForm = () => {

    const [budget, setBudget] = useState(0);

    const { dispatch } = useBudget();

    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
        setBudget(event.target.valueAsNumber);
    }

    const isValid = useMemo(() => {
        return isNaN(budget) || budget <= 0;
    }, [budget]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch({type: 'add-budget', payload: {budget}});
    }


    return (
        <form className="space-y-5" onSubmit={ handleSubmit }>
            <div className="flex flex-col space-y-5">
                <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">

                </label>
                <input 
                    id="budget"
                    type="number"
                    className="w-full bg-white border border-gray-200 p-2"
                    placeholder="Define your budget"
                    name="budget"
                    value={budget}
                    onChange={handleChange}
                />
            </div>
            <input 
                type="submit"
                value="Define budget"
                className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase disabled:opacity-40"
                disabled={isValid}
            />
        </form>
    );
    
}
