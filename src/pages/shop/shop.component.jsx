import React from 'react';
import SHOPDATA from './shoping-data.js';

class ShopPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collections: SHOPDATA
        }
    }
}

export default ShopPage;