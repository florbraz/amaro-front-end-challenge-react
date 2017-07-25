import React from 'react';

const MiniCartListItem = ({product}) => {
	const productImage = product.image;
	const isOnSale = product.on_sale
	return (		
		<tr>
			<td>
				<img src={productImage} className="mini-cart-product-image"/>
			</td>
			<td>
				<h5>{product.name}</h5>
			</td>
			<td>
				{isOnSale && 
					<div>
						<div className="discounted-price">
							<s>{product.regular_price}</s>
						</div>
					</div>
				}
				<b>{product.actual_price}</b>
			</td>
		</tr>
	)
}

export default MiniCartListItem;