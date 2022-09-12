import axios from 'axios'
export const POST_ADMIN_LOGIN = 'ADMIN_LOGIN'
export const POST_Add_TO_CART = 'Add_TO_CART'

export const adminLogin = (userName, password) => async dispatch => {
	await axios.post('http://127.0.0.1/storefront/rest/V1/integration/admin/token', {
		username: userName,
		password: password
	  }).then((response) => {
		console.log("response", response)
		localStorage.setItem('AdminData', JSON.stringify(response.data))
		dispatch({
			type: POST_ADMIN_LOGIN,
			payload: response.data
		})
	  }).catch((error) => {
		console.log(error)
		dispatch({
			type: POST_ADMIN_LOGIN,
			payload: error.response.data
		})
	  })
	
}
export const addToCart = (cartData, qty) => async dispatch => {
	// let localCartData = localStorage.getItem('cartData') != null ? localStorage.getItem('cartData') : []
	cartData.cartQty = qty
	// localStorage.setItem('cartData', localCartData.push(cartData))
	dispatch({
		type: POST_Add_TO_CART,
		payload: cartData
	})
}

