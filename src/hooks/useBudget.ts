import { useContext } from "react"
import { BudgetContext } from "../context/BudgetContext";


export const useBudget = () => {

    const context = useContext(BudgetContext);

    if (!context) {
        throw new Error("useBudget MUST BE USED WITHIN A BudgetProvider.");
    }

    return context;

}