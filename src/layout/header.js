import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    
	render() {
		const {cartNumber} = this.props;
		
		return (
			<header id="header">
				<div className="bx_hd_blank"></div>
				<div className="header_wrap header_fix">
				<h1 className="h_logo">
					<a href="#" className="sp_hd">옥션</a>
				</h1>
				<a href="#" className="btn_search sp_hd">검색</a>
				<div id="search_box" className="search_box focus">
					<div className="inp_seach">
						<input type="text" id="keyword" className="inp search-box_text-field"></input>
						<button type="button" className="btn_del sp_hd">삭제</button>
					</div>
					<button type="submit" className="btn_sch_submit sp_hd">검색</button>
					<a href="#" className="btn_sch_cancel sp_hd search-box_button--cancel">취소</a>
				</div>
					<Link to="/cart"><span className="btn_cart sp_hd">장바구니<em className="cart_num">{cartNumber}</em></span></Link>
				</div>
			</header>
        );
    }
}

export default Header;
