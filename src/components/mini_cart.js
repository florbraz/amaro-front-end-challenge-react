import React from 'react';
import MiniCartList from './mini_cart_list';

const MiniCart = ({cartItems, removeItem}) => {
	return (
		<div id="mini-cart" className="mini-cart">
			{cartItems.length == 0 ? 'You haven\'t added any items to your cart' : ''}
			<MiniCartList 
				cartItems={cartItems}
				removeItem={removeItem}
			/> 
			<div className="form-actions">
				<a className="btn btn-primary">Show Cart</a>
			</div>
		</div>
	)
}

export default MiniCart;