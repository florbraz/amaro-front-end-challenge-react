import React, {Component} from 'react';
import MiniCartListItem from './mini_cart_list_item';


const MiniCartList = ({cartItems}) => {
	const cart_items = cartItems.map((cartItem) => {
		return (
			<MiniCartListItem
				key={cartItem.sku}
				cartItem={cartItem}
				quantity={quantity}
			/>
		)
	})
	return (
		<table className="table table-bordered">
			<tbody>
				{cart_items}
			</tbody>
		</table>
	)
}

export default MiniCartList;