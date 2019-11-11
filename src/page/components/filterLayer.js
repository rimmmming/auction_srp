import React, {Component} from 'react';

const FilterLayer = ({filterActive, layerClose, viewTypeFunc, viewTypeNumber, makeFreeDeliveryFunc}) => {
    //console.log(viewTypeNumber)
    return(
        <div id="region--content_filter" className={filterActive ? 'js-filter--fixed' : ''}>
            <div className="section--content_filter_container">
                <h3 className="text--region_title">카테고리 및 상세검색 메뉴</h3>
                <div className="content--filter_top"><h3 className="text--filter_title">상세검색</h3></div>
                <div className="section--content_scroll_content">
                    <div className="section--module_wrap" module-design-id="3046">
                        <div className="section--select_view_type">
                            <h4 className="text--text--filter_title">상품보기 방식</h4>
                            <button className={viewTypeNumber ? "button--type_gallery_view" : "button--type_gallery_view on"} onClick={() => {viewTypeFunc(0)}}><span className="ir">G</span></button>
                            <button className={viewTypeNumber ? "button--type_list_view on" : "button--type_list_view"} onClick={()=> {viewTypeFunc(1)}}><span className="ir">L</span></button>
                        </div>
                    </div>
                    <div className="section--module_wrap" module-design-id="2026">
                        <div className="component component--filter type-simple name--select_delivery">
                            <div className="filter_content">
                                <div className="section--checkbox_form">
                                    <input type="checkbox" name="isSmileDelivery" id="check--smiledelivery" className="custom_form--checkbox" />
                                    <label htmlFor="check--smiledelivery" className="custom_form--label"><img src="http://pics.auction.co.kr/mobile/smiledelivery/lnb-logo-smiledelivery-w@2x.png" alt="스마일배송" /></label>
                                    <input type="checkbox" name="isFreeShipping" id="check--delivery_free" className="custom_form--checkbox" />
                                    <label htmlFor="check--delivery_free" className="custom_form--label" onClick={() => {makeFreeDeliveryFunc()}}>무료배송</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section--module_wrap" module-design-id="2027">
                        <div className="section--filter_close">
                            <button type="button" className="button--close_filter_container" onClick={layerClose}><span className="button--close_text">닫기</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FilterLayer;