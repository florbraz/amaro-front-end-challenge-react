import React, {Component} from 'react';

class CatalogListItem extends Component {
	constructor(props) {
		super(props);

		// gets the first available size to set up the state
		const availableSize = props.product.sizes.filter(function(obj) {
			return obj.available == true;
		});

		this.state = {
			product: props.product,
			size: availableSize[0].size,
			sku: availableSize[0].sku,
			qty: 1
		};
	}

	// when we change the sizing of a product, we should update our state - this way we can send the correct product to the cart
	onSelectChange(sizeSelected) {

		// gets the rest of the infos, based on the select value (key)
		const sizeInfo = this.state.product.sizes.filter(function(obj) {
			return obj.sku == sizeSelected.value;
		});
		
		this.setState({
			sku: sizeInfo[0].sku,
			size: sizeInfo[0].size
		});
	}

	// defining the "add to cart" function - we'll just push this info to the parent level here
	onProductAddToCart(product) {
		this.props.onProductAddToCart(product);
	}	

	render() {
		
		const product = this.state.product;
		const productSelected = this.state;

		let productImage = product.image;
		if (productImage == "") {
			productImage = 'http://placehold.it/470x594';
		}

		const isOnSale = product.on_sale;

		return (
			<div className="list-group-item col-xs-6 col-sm-4 col-md-3 col-lg-2">
				<img src={productImage}/>
				<div className="product-info">
					<h3>{product.name}</h3>
					{isOnSale && 
						<div>
							<div className="discounted-price">
								<span>de: </span>
								<s>{product.regular_price}</s>
								<br />
								<span>por:</span>
							</div>
							<div className="discount-badge collapse">
								<span>{product.discount_percentage}</span>
							</div>
						</div>
					}
					<b>{product.actual_price}</b>
					<div className="sizing-add-to-cart">
						<span>Tamanhos disponíveis:</span>
						<select onChange={event => this.onSelectChange(event.target)}>
						{ 
							product.sizes.map((size) => {
								
								return (
									<option 
										value={size.sku}
										name={size.sku}	
										key={size.sku}	
										disabled={!size.available} >
										{size.size}
									</option>
									
								)
							})
						}
						</select>
						<button 
							className="btn btn-primary" 
							onClick={() => this.onProductAddToCart(productSelected)}>
								add to cart
						</button>
					</div>
				</div>

			</div>
		)
	}
}


export default CatalogListItem;