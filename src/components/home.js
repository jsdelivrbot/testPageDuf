import React, {Component} from 'react';
import MenuComponent from './menu';
import {Link} from 'react-router';


class HomeComponent extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-4 menu-container">
                    <MenuComponent/>
                </div>
                <div className="col-8">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default HomeComponent;