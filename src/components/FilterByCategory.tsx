import { ChangeEvent } from "react";
import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";

export const FilterByCategory = () => {

    const { dispatch } = useBudget();

    const handleChange = (event: ChangeEvent<HTMLSelectElement>)  => {
        dispatch({ type: 'add-filter-category', payload: { id: event.target.value } })
    }


    return (
        <div className="bg-white shadow-lg rounded-lg p-10">
            <form>
                <div className="flex flex-col md:flex-row md:items-center gap-5">
                    <label htmlFor="category"></label>
                    <select 
                        id="category"
                        className="bg-slate-100 p-3 flex-1 rounded"
                        onChange={handleChange}
                    >
                        <option value="">-- All categories --</option>
                        {categories.map(category => (
                            <option 
                                key={category.id}
                                value={category.id}
                            >
                                { category.name }
                            </option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    );
}