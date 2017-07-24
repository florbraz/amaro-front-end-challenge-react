import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CatalogList from './components/catalog_list';
import MiniCart from './components/mini_cart';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {};

		this.getProducts();
	}

	getProducts() {
		axios.get(`/products.json`)
      		.then(data => {
        		this.setState({
        			products: data.data.products
        		});
      		}
      	);
	}

	render() {
		return (
			<div>
				<h1>Amaro</h1>
				<MiniCart />
				<CatalogList products={this.state.products} />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));