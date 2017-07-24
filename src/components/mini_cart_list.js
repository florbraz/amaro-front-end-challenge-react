import React, {Component} from 'react';
import MiniCartListItem from './mini_cart_list_item';


class MiniCartList extends Component {
	constructor(props) {
		super(props);
		
		this.state = {};
	}
	render() {
		return <MiniCartListItem/>
	}
}

export default MiniCartList;