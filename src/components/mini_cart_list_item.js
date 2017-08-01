import React, {Component} from 'react';

class MiniCartListItem extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			cartItem: props.cartItem
		}
	}
	
	onQuantityChange(quantity) {
		let newData = this.state.cartItem;
		if (quantity > 1) {
			newData.qty = quantity;
		} else {
			newData.qty = 1;
		}
		this.setState(newData);
	}

	increaseQuantity() {
		let newData = this.state.cartItem;
		newData.qty++;
		this.setState(newData);	
	}

	decreaseQuantity() {
		let newData = this.state.cartItem;
		if (newData.qty > 1) {
			newData.qty--;
		}
		this.setState(newData);	
	}

	render() {
		const cartItem = this.state.cartItem;

		const productImage = cartItem.product.image;
		const isOnSale = cartItem.product.on_sale;	

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
				        <button
				         className="btn btn-default" 
				         onClick={() => this.decreaseQuantity()}
				         type="button">-</button>
				      </span>
				      <input 
				      	type="text" 
				      	className="form-control" 
				      	value={cartItem.qty} 
				      	onChange={event => this.onQuantityChange(event.target.value)}
				      />
				      <span className="input-group-btn">
				        <button 
				        	className="btn btn-default" 
				        	onClick={() => this.increaseQuantity()}
				        	type="button">+</button>
				      </span>
				    </div>
				</td>
			</tr>
		)
	}
}

export default MiniCartListItem;