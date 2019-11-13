import React, { Component } from "react";

class ItemSort extends Component {
  state = {
    sortLayerToggle: "false",
    noticeToggle: "false"
  };

  sortLayerToggle = () => {
    this.setState({
      sortLayerToggle: !this.state.sortLayerToggle
    });
  };

  noticeToggle = () => {
    this.setState({
      noticeToggle: !this.state.noticeToggle
    });
  };

  render() {
    const {
      sortRowPrice,
      sortBuyCount,
      sortRank,
      renderList,
      makeItemList
    } = this.props;
    return (
      <div className="section--select_information">
        <div className="section--select_option">
          <button
            type="button"
            className="link--button_sort"
            onClick={this.sortLayerToggle}
          >
            정렬
          </button>
          <div
            className={
              this.state.sortLayerToggle
                ? "sort--option_box"
                : "sort--option_box on"
            }
          >
            <ul className="sort--option_select">
              <li className={renderList[0] ? "item item--active" : "item"}>
                <a
                  href="#"
                  className="link"
                  onClick={() => {
                    sortRank(makeItemList);
                  }}
                >
                  옥션랭킹순
                </a>
                <button
                  type="button"
                  className="button--notification_advertisement"
                  onClick={this.noticeToggle}
                >
                  광고포함
                </button>
                <span
                  className={
                    this.state.noticeToggle
                      ? "section--notification_advertisement"
                      : "section--notification_advertisement on"
                  }
                >
                  <span className="text--notification_advertisement">
                    옥션랭킹순은 광고구매여부, 판매실적, 검색정확도,
                    고객이용행태, 서비스 품질 등을 기준으로 정렬됩니다.
                    찬스쇼핑, 파워클릭 영역은 광고입찰가순으로 전시됩니다.
                  </span>
                </span>
              </li>
              <li className={renderList[1] ? "item item--active" : "item"}>
                <a
                  href="#"
                  className="link"
                  onClick={() => {
                    sortBuyCount(makeItemList);
                  }}
                >
                  구매순
                </a>
              </li>
              <li className={renderList[2] ? "item item--active" : "item"}>
                <a
                  href="#"
                  className="link"
                  onClick={() => {
                    sortRowPrice(makeItemList);
                  }}
                >
                  낮은가격순
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default ItemSort;
