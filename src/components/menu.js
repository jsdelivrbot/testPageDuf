import React, {Component} from 'react';
import {Link} from 'react-router';

class MenuComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menuVisible: false
        }
    }


    render() {

        var toggleMenu;

        const showHide = {
            'display': this.state.menuVisible ? 'block' : 'none'
        };


        return (
            <div>
                <div className="menu-navicon">
                    <img src="../images/burger.png" alt="" onClick={this.onNaviconClick.bind(this)}/>
                </div>
                <ul className="menu-list">
                    <li className="menu-typo-big"><Link to="/home">DUFAJ</Link></li>
                    <ul style={showHide}>
                        <li className="menu-typo-medium"><Link to="/home/more">PROJECTS</Link></li>
                        <li className="menu-typo-medium"><Link to="/home/more">PUBLICATIONS</Link></li>
                        <li className="menu-typo-medium"><Link to="/home/more">MORE</Link></li>
                    </ul>
                </ul>
                <p className="menu-typo-small">Dufaj. All rights reserved.</p>
            </div>
        );
    }

    onNaviconClick(e) {
        this.setState({menuVisible: !this.state.menuVisible});
    }
}

export default MenuComponent;