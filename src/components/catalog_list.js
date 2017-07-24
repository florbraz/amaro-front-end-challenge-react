import React from 'react';
import CatalogListItem from './catalog_list_item.js';

const CatalogList = (props) => {
	if (!props.products) {
		return <div>Loading...</div>;
	}
	const productItems = props.products.map((product) => {
		return (
			<CatalogListItem 
				key={product.code_color}
				product={product}
			/>
		)
	})
	return (
		<div className="list-group">
			{productItems}
		</div>
	)
}

export default CatalogList;