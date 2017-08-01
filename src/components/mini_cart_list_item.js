import React from 'react';

const MiniCartListItem = ({cartItem}) => {
	const productImage = cartItem.product.image;
	const isOnSale = cartItem.product.on_sale
	return (		
		<tr>
			<td>
				<img src={productImage} className="mini-cart-product-image"/>
			</td>
			<td>
				<h5>{cartItem.product.name}</h5>
				<p>{cartItem.size}</p>
			</td>
			<td>
				{isOnSale && 
					<div>
						<div className="discounted-price">
							<s>{cartItem.product.regular_price}</s>
						</div>
					</div>
				}
				<b>{cartItem.product.actual_price}</b>
			</td>
			<td>
				qty: {cartItem.qty}
			</td>
		</tr>
	)
}

export default MiniCartListItem;