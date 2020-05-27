import { ADD_TO_CART, REMOVE_FROM_CART } from './types';
export const addToCart =  (items, panier) => (dispatch)=>{
	const cartItems = items.slice();

			
			let panierAlreadyInCart = false;
			cartItems.forEach(item=> {
				if(item.id === panier.id){
					panierAlreadyInCart = true;
					item.count++;
				}
			});
			if(!panierAlreadyInCart){
				cartItems.push({...panier, count:1});
			}
			localStorage.setItem('cartItems', JSON.stringify(cartItems));
			return dispatch({
				type: ADD_TO_CART,
				payload:{
					cartItems: cartItems
				}
			});
		
}

export const removeFromCart = (items, panier)=> (dispatch) => {

			const cartItems = items.slice().filter(elm=> elm.id!==panier.id);
			localStorage.setItem('cartItems', JSON.stringify(cartItems));
			return dispatch({
				type: REMOVE_FROM_CART,
				payload:{
					cartItems: cartItems
				}
			})
	
}