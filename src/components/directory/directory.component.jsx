import React from 'react';
import MenuItem from '../menu-item/menu-item.component.jsx';
import sections from './directory.data.js';
import './directory.styles.scss'
class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            item_sections: [] // this is inited as an empty array of menuItems
        }
    }

    componentDidMount() {
        this.setState({ item_sections: sections });
    }

    render() {
        return (
            <div className='directory-menu'>
                {/* {
                    this.state.item_sections.map(
                        ({ id, imageUrl, title, size, linkUrl }) => (
                            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} url={linkUrl}/>
                        ))
                } */}
                {
                    this.state.item_sections.map(({ id, ...args }) => (
                        <MenuItem key={id} {...args} />
                    ))
                }
            </div>
        )
    }
}
export default Directory;