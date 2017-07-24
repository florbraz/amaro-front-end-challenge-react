import React, {Component} from 'react';
import MiniCartList from './mini_cart_list';

class MiniCart extends Component {
	render() {
		return (
			<div id="mini-cart" className="mini-cart">
				<MiniCartList/> 
				<div className="form-actions">
				<a className="btn btn-primary">Show Cart</a>
				</div>
			</div>
		)
	}
}

export default MiniCart;