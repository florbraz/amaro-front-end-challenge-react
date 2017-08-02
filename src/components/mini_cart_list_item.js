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

	removeItem(sku) {
		this.props.removeItem(sku);	
	}


	render() {
		const cartItem = this.state.cartItem;
		const productImage = cartItem.product.image;
		const isOnSale = cartItem.product.on_sale;

		const currency = cartItem.product.actual_price;
		const currencyValue = Number(currency.replace(/[^0-9\.]+/g,""));
		const cartTotal = currencyValue * cartItem.qty / 100;


		Number.prototype.formatMoney = function(c, d, t){
		var n = this, 
		    c = isNaN(c = Math.abs(c)) ? 2 : c, 
		    d = d == undefined ? "." : d, 
		    t = t == undefined ? "," : t, 
		    s = n < 0 ? "-" : "", 
		    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
		    j = (j = i.length) > 3 ? j % 3 : 0;
		   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
		 };

		 
		const cartTotalFormatted = 'R$ '+cartTotal.formatMoney(2, ',', '.');


		return (		
			<tr data-total={cartTotal}>
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
				         type="button">
				         	-
				         </button>
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
			        	type="button">
			        		+
				        </button>
				      </span>
				    </div>
				    {cartTotalFormatted}
				</td>
				<td>
					<button 
			        	className="btn btn-danger" 
			        	onClick={() => this.removeItem(cartItem.sku)}
			        	type="button">
			        		x
		        	</button>
				</td>
			</tr>
		)
	}
}

export default MiniCartListItem;