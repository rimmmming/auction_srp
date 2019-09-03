import React, {Component} from 'react';
import ItemCard from './components/itemcard';
//mport ItemSort from './components/sort';
import ItemFilter from './components/filter';
import axios from 'axios';
//import _ from 'lodash';

class Listpage extends Component {
	constructor(props){
        super(props);
        this.state = {
			itemLists : [],
			active : false
        }
    }
	_makeItemList = () => {
        const itemLists = this.state.itemLists.map((itemList, i) => {
			return <ItemCard
				key={i}
				itemImageURL={itemList.ImageURL}
				itemBrandName={itemList.BrandName}
				itemGoodsName={itemList.GoodsName}
				itemSalePrice={itemList.SalePrice}
				itemDeliveryText={itemList.DeliveryText}
				itemDeliveryInfo={itemList.DeliveryInfo}
				itemBuyCount={itemList.BuyCount}
			/>
		})
        return itemLists
    }

    _callApi = () => {
        return axios('./SearchJson.json')
        .then(({ data })=> {
            //console.log(data.Item);
            this.setState(
    			{ itemLists: data.Item }
            );
        })
		.catch(err => console.log(err))
	}

	_typeChangeFunc(){
		this.setState({
            active : !this.state.active
        })
	}
    
    componentDidMount(){
        this._callApi();
        this._makeItemList();
    }
	render() {
		let typeClass = this.state.active ? 'state--content_view_type__gallery' : 'state--content_view_type__list'
		return (
			<div id="content" className={typeClass}>
				<div className="section--content_body_container">

					<div id="region--content_status_information">   
						<div className="section--module_wrap">
							<div className="section--search_relative_information section--content_information_bar_container">
								<div className="text--search_result">
									<span className="text--item_count result--text_color">56,537</span>
									<span className="text--description"><em className="result--text_color">개</em>의 검색 결과</span>
								</div>
								<div className="section--select_information">
									<div className="section--select_option">
										<button type="button" className="link--button_sort" onClick={this._typeChangeFunc.bind(this)}>정렬</button>
										<div className="sort--option_box">
											<ul className="sort--option_select">
												<li className="item">
													<a href="#" className="link">옥션랭킹순</a><button type="button" className="button--notification_advertisement">광고포함</button>
													<span className="section--notification_advertisement">
														<span className="text--notification_advertisement">
														옥션랭킹순은 광고구매여부, 판매실적, 검색정확도, 고객이용행태, 서비스 품질 등을 기준으로 정렬됩니다.
														찬스쇼핑, 파워클릭 영역은 광고입찰가순으로 전시됩니다.
														</span>
													</span>
												</li>
												<li className="item"><a href="#" className="link">판매인기순</a></li>
												<li className="item item--active"><a href="#" className="link">낮은가격순</a></li>
												<li className="item"><a href="#" className="link">만족도높은순</a></li>
												<li className="item"><a href="#" className="link">신규등록순</a></li>
											</ul>
										</div>
									</div>
								</div>
								<button type="button" className="link--button_filter link_active">필터</button>
							</div>
							<ItemFilter />           
						</div>
					</div>
					
					<div id="region--content_body">
						<div id="section--inner_content_body_container">
							<div className="section--module_wrap">
								{this._makeItemList()}
							</div>
						</div>
					</div>
				
				</div>
			</div>
		)
	}
}
export default Listpage;
