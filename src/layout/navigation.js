import React, {Component} from 'react';

class Navigation extends Component {
  render() {
    return (
        <div className="Navigation">
            <div className="section--sub_category type_lp">
                <ul className="list--sub_category_keywords">
                    <li className="item"><a href="#" className="link on">전체</a></li>
                    <li className="item"><a href="#" className="link">샤오미 선풍기</a></li>
                    <li className="item"><a href="#" className="link">휴대용 선풍기</a></li>
                    <li className="item"><a href="#" className="link">탁상용&amp;핸디 선풍기</a></li>
                    <li className="item"><a href="#" className="link">써큘레이터1</a></li>
                    <li className="item"><a href="#" className="link">써큘레이터2</a></li>
                </ul>
            </div>
        </div>
    )
  }
}
export default Navigation;
