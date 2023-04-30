import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addPizzaQuantity(state, {payload}) {
            const {id, quantity} = payload;
            const index = state.findIndex(pizza => pizza.id === id);
            if (index === -1) {
                state.push({id, quantity})
            } else
                state[index].quantity = quantity;
        },
        removePizzaQuantity(state, {payload}) {
            const {id, quantity} = payload;
            const index = state.findIndex(pizza => pizza.id === id);
            if (index === -1) {
                return
            }
            state[index].quantity = quantity;
            if (quantity === 0) {
                state.splice(index, 1)
            }
        },
        makeOrder(state){
            state.length = 0
        },

    },
})
export const {addPizzaQuantity, removePizzaQuantity, makeOrder} = cartSlice.actions;
export default cartSlice.reducer;