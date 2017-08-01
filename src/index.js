import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CatalogList from './components/catalog_list';
import MiniCart from './components/mini_cart';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			cartItems: []
		};

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

	addToCart(product) {
		const sku = product.sku;
		
		this.setState(
			{cartItems: this.state.cartItems.concat(product)}
		)
	}

	render() {
		return (
			<div>
				<nav className="navbar navbar-inverse navbar-fixed-top">
  					<div className="container-fluid">
					    <div className="navbar-collapse">
					      <ul className="nav navbar-nav navbar-right">
					        <li className="dropdown">
					          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Mini-Cart <span className="caret"></span></a>
					          <div className="dropdown-menu">
								
									<MiniCart cartItems={this.state.cartItems}/>
					            
					          </div>
					        </li>
					      </ul>
					    </div>
					</div>
				</nav>
				<h1>Amaro</h1>
				<CatalogList 
					products={this.state.products} 
					onProductAddToCart={
						product => this.addToCart(product)
					}
				/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.container-fluid'));