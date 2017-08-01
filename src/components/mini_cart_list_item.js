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
				<div className="input-group">
			      <span className="input-group-btn">
			        <button className="btn btn-default" type="button">-</button>
			      </span>
			      <input type="text" className="form-control" value={cartItem.qty}/>
			      <span className="input-group-btn">
			        <button className="btn btn-default" type="button">+</button>
			      </span>
			    </div>
			</td>
		</tr>
	)
}

export default MiniCartListItem;