import React, { Component } from "react";

class ItemCard extends Component {
  render() {
    const {
      itemImageURL,
      itemBrandName,
      itemGoodsName,
      itemSalePrice,
      itemDeliveryText,
      itemDeliveryInfo,
      itemBuyCount,
      addFavorite,
      IsFavoriteSeller,
      itemRanking
    } = this.props;
    //console.log(itemFavorite)
    return (
      <div className="component component--item_card">
        <div className="itemcard">
          <div className="section--itemcard_box">
            <div className="section--itemcard">
              <div className="itemcard--inner">
                <a href={itemImageURL} className="link--itemcard">
                  <span className="section--itemcard_img">
                    <img
                      src={itemImageURL}
                      className="image--itemcard"
                      alt=""
                    ></img>
                  </span>
                  <span className="section--itemcard_info">
                    <span className="area--itemcard_title">
                      <span className="text--brand">{itemBrandName}</span>
                      <span className="text--title">{itemGoodsName}</span>
                    </span>
                    <span className="area--itemcard_price">
                      <span className="price_seller">
                        <strong className="text--price_seller">
                          {itemSalePrice}
                        </strong>
                        <span className="text--unit">원</span>
                      </span>
                    </span>
                    <span className="section--itemcard_info_add">
                      <span className="text--addinfo">{itemDeliveryText}</span>
                      <span className="text--addinfo">{itemDeliveryInfo}</span>
                    </span>
                    <span className="section--itemcard_info_score">
                      <span className="score--buycnt">
                        <span className="text--buycnt">구매</span>
                        <span className="text--buycnt__num">
                          {itemBuyCount}
                        </span>
                        <span className="ir">건</span>
                      </span>
                      <span className="score--awards">
                        <span className="ir">만족도</span>
                        <span className="text--awards">4.8</span>
                        <span className="ir">점</span>
                      </span>
                    </span>
                  </span>
                </a>
                <div>
                  <button
                    className={
                      IsFavoriteSeller
                        ? "button--favorite on"
                        : "button--favorite"
                    }
                    onClick={() => addFavorite(itemRanking)}
                  >
                    <span className="icon--favorite">
                      <span className="ir">관심상품 등록하기</span>
                    </span>
                  </button>
                  <button className="button--cart element-info-cart">
                    <span className="icon--cart">
                      <span className="ir">장바구니담기</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ItemCard;
