import React, { Component } from "react";
import ItemCard from "./components/itemcard";
import ItemSort from "./components/sort";
import ItemFilter from "./components/filter";
import KeyWord from "./components/keyword";
import FilterLayer from "./components/filterLayer";
import axios from "axios";

class Listpage extends Component {
  state = {
    renderList: [true, false, false],
    itemLists: [],
    itemFavoriteLists: [],
    itemListsLength: 0,
    itemFreeDeliveryLists: [],
    viewTypeNumber: 0,
    filterToggle: true,
    filterActive: false,
    freeDeliveryToggle: false,
    keyWordLists: []
  };

  searchKeyword = () => {
    const keyWordLists = this.state.keyWordLists.map((keyword, i) => {
      return <KeyWord Category={keyword.CategoryNm} key={i} />;
    });
    return keyWordLists;
  };

  _makeItemList = () => {
    const number = this.state.itemLists.length;
    const itemLists = this.state.itemLists.slice(0, number).map(itemList => {
      return (
        <ItemCard
          key={itemList.ranking}
          itemRanking={itemList.ranking}
          itemImageURL={itemList.ImageURL}
          itemBrandName={itemList.BrandName}
          itemGoodsName={itemList.GoodsName}
          itemSalePrice={itemList.SalePrice}
          itemDeliveryText={itemList.Delivery.DeliveryText}
          itemDeliveryInfo={itemList.Delivery.DeliveryInfo}
          itemBuyCount={itemList.BuyCount}
          IsFavoriteSeller={itemList.IsFavoriteSeller}
          addFavorite={this.addFavorite}
          favoriteToggle={this.state.favoriteToggle}
        />
      );
    });
    return itemLists;
  };

  _callApi = () => {
    return axios("./SearchJson.json")
      .then(({ data }) => {
        this.setState({
          itemLists: data.Item,
          keyWordLists: data.Category
        });
      })
      .catch(err => console.log(err));
  };

  //필터 온오프 클래스 불린값 설정 함수
  filterToggle = () => {
    //const toggle = this.state.filterActive ? 'false' : 'true'
    this.setState({
      filterActive: !this.state.filterActive
    });
  };

  // 필터 레이어 닫기 함수
  layerClose = () => {
    this.setState({
      filterActive: false
    });
  };

  // 리스트뷰 타입 넘버 받아오는 함수
  viewTypeFunc = typeNumber => {
    this.setState({
      viewTypeNumber: typeNumber
    });
  };
  //랭킹순
  sortRank = () => {
    const number = this.state.itemLists.length;
    const sortList = this.state.itemLists.slice(0, number).sort(function(a, b) {
      return a["ranking"] - b["ranking"];
    });
    this.setState({
      renderList: [true, false, false],
      itemLists: sortList
    });
  };

  //낮은 가격순
  sortRowPrice = () => {
    const number = this.state.itemLists.length;
    const sortList = this.state.itemLists.slice(0, number).sort(function(a, b) {
      return a["SellPrice"] - b["SellPrice"];
    });
    this.setState({
      renderList: [false, false, true],
      itemLists: sortList
    });
  };

  //구매순
  sortBuyCount = () => {
    const number = this.state.itemLists.length;
    const sortList = this.state.itemLists.slice(0, number).sort(function(a, b) {
      return b["BuyCount"] - a["BuyCount"];
    });
    this.setState({
      renderList: [false, true, false],
      itemLists: sortList
    });
  };
  makeFreeDeliveryFunc = () => {
    this.setState({
      freeDeliveryToggle: !this.state.freeDeliveryToggle
    });
    if (!this.state.freeDeliveryToggle) {
      this.freeDeliveryFunc();
    } else {
      this.freeDeliveryCancelFunc();
    }
  };

  //무료배송
  freeDeliveryFunc = () => {
    const number = this.state.itemLists.length;
    const itemFreeDeliveryLists = this.state.itemLists
      .slice(0, number)
      .filter(itemList => {
        return itemList.Delivery.DeliveryText === "무료배송";
      });
    this.setState({
      itemLists: itemFreeDeliveryLists,
      itemListsCopy: this.state.itemLists
    });
  };

  freeDeliveryCancelFunc = () => {
    this.setState({
      itemLists: this.state.itemListsCopy
    });
  };

  addFavorite = ranking => {
    const changeFavorite = this.state.itemLists;
    const index = this.state.itemLists.findIndex(
      todo => todo.ranking === ranking
    );
    changeFavorite[index].IsFavoriteSeller = !changeFavorite[index]
      .IsFavoriteSeller;
    this.setState({
      itemLists: changeFavorite
    });
    //console.log(this.state.itemLists);
  };

  componentDidMount() {
    this._callApi();
  }
  render() {
    return (
      <div
        id="content"
        className={
          this.state.viewTypeNumber
            ? "state--content_view_type__list"
            : "state--content_view_type__gallery"
        }
      >
        <div className="section--content_body_container">
          <ItemFilter searchKeyword={this.searchKeyword} />
          <div className="section--search_relative_information section--content_information_bar_container">
            <div className="text--search_result">
              <span className="text--item_count result--text_color">
                {this.state.itemLists.length}
              </span>
              <span className="text--description">
                <em className="result--text_color">개</em>의 검색 결과
              </span>
            </div>
            <ItemSort
              renderList={this.state.renderList}
              sortRowPrice={this.sortRowPrice}
              sortBuyCount={this.sortBuyCount}
              sortRank={this.sortRank}
              makeItemList={this._makeItemList}
            />
            <button
              type="button"
              className="link--button_filter link_active"
              onClick={this.filterToggle}
            >
              필터
            </button>
          </div>
          <FilterLayer
            filterActive={this.state.filterActive}
            layerClose={this.layerClose}
            viewTypeFunc={this.viewTypeFunc}
            viewTypeNumber={this.state.viewTypeNumber}
            makeFreeDeliveryFunc={this.makeFreeDeliveryFunc}
          />
          <div id="region--content_body">
            <div id="section--inner_content_body_container">
              <div className="section--module_wrap">{this._makeItemList()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Listpage;
