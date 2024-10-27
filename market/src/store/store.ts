import { createStore } from "vuex";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    imageUrl: string;
}

interface State {
    cart: {
        items: Product[];
    }
}

const store = createStore<State>({
    state() {
        return {
            cart: {
                items: [],
            }
        };
    },
    mutations: {
        addItemToCart(state, product: Product) {
            const itemInCart: Product | undefined = state.cart.items.find(item => item.id === product.id)

            if (!itemInCart) {
                state.cart.items.push(product);
            }
        },
        removeItemFromCart(state, product: Product) {
            const itemInCart: Product | undefined = state.cart.items.find(item => item.id === product.id)
            
            if (itemInCart) {
                const itemIndex: number = state.cart.items.indexOf(itemInCart);
                state.cart.items.splice(itemIndex, 1)
            }
        }
    },
    actions: {
        increment({ commit }) {
            commit("increment");
        },
        addItemToCart({ commit }, product: Product) {
            commit("addItemToCart", product);
        },
        removeItemFromCart({ commit }, product: Product) {
            commit("removeItemFromCart", product);
        }
    },
    getters: {
        // getCount(state) {
        //     return state.count;
        // }
        getItemsFromCart(state) {
            return state.cart.items;
        },
        getTotalPrice(state) {
            return state.cart.items.reduce((total, item) => total + item.price, 0)
        }
    }
});

export default store;