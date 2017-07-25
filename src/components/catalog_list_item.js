import React from 'react';

const CatalogListItem = ({product, onProductAddToCart}) => {
	const productImage = product.image;
	const isOnSale = product.on_sale
	return (
		<div className="list-group-item col-xs-6 col-sm-4 col-md-3 col-lg-2">
			<img src={productImage}/>
			<h3>{product.name}</h3>
			{isOnSale && 
				<div>
					<div className="discounted-price">
						<span>de: </span>
						<s>{product.regular_price}</s>
						<br />
						<span>por:</span>
					</div>
					<div className="discount-badge">
						<span>{product.discount_percentage}</span>
					</div>
				</div>
			}
			<b>{product.actual_price}</b>
			<div className="sizing-add-to-cart">
				<span>Tamanhos disponíveis:</span>
				<select>
				{ 
					product.sizes.map((size) => {
						
						return (
							<option 
								name={size.sku}	
								key={size.sku}	
								disabled={size.available} >
								{size.size}
							</option>
							
						)
					})
				}
				</select>
				<button 
					className="btn btn-primary" 
					onClick={() => onProductAddToCart(product)}>
						add to cart
				</button>
			</div>

		</div>
	)
}

export default CatalogListItem;