import React, {Component} from 'react';

class ItemFilter extends Component {
      
    render() {
        return (
            <div className="section--module_wrap">
                <div className="section--search_relative_information section--selected_keywords_container">
                    <div className="component--filter filter_on">
                        <h3 className="text--region_title">필터검색결과안내</h3>
                        <div className="section--selected_keywords">
                            <ul className="list--selected_keywords filter_result">
                                <li className="item"><a href="#" className="link">써큘레이터<span className="ir">닫기</span></a></li>
                                <li className="item"><a href="#" className="link">샤오미 선풍기<span className="ir">닫기</span></a></li>
                                <li className="item"><a href="#" className="link">샤오미 선풍기<span className="ir">닫기</span></a></li>
                                <li className="item"><a href="#" className="link">샤오미 선풍기<span className="ir">닫기</span></a></li>
                                <li className="item"><button type="button" className="button__reset"><span className="ir">새로고침</span></button></li>
                            </ul>
                        </div>
                    </div>                                                            
                </div>
            </div>
        )
    }

}
export default ItemFilter;
