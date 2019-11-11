import React, { Component, Fragment } from 'react';

  class Head extends Component {

  state = {
    keyword : "청바지"
  }


  render() {
    return (
      <Fragment>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.5,minimum-scale=1.0,user-scalable=yes"/>
      <meta name="theme-color" content="#fff" />
      <meta http="x-dns-prefetch-control" content="on" />
      <link rel="dns-prefetch" href="//pics.auction.co.kr" />
      <link rel="dns-prefetch" href="//script.auction.co.kr" />
      <link rel="dns-prefetch" href="//image.auction.co.kr" />
      {/* dns-prefetch를 이용하여 도메인 설정 후 속도를 좀 더 빠르게 해주는 기능 */}
      <link rel="shortcut icon" href="http://pics.iacstatic.co.kr/common/static/favicon_2011.ico" />
      <link rel="stylesheet" href="//script.auction.co.kr/mobile/style/css/common_frame.css" />
      <link rel="stylesheet" href="//script.auction.co.kr/build/mobile/css/snowwhite/app.css" />
      {/* 검색창에 의한 메타티그 최신화 필요 */}
      <title>옥션 - {this.state.keyword} : 모바일 쇼핑은 옥션</title>
      <meta name="description" content="옥션 내 청바지 상품입니다." />
      <meta name="keywords" content="청바지" />
      <link rel="canonical" href="http://browse.auction.co.kr/search?keyword=%ec%b2%ad%eb%b0%94%ec%a7%80" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://browse.auction.co.kr/search?keyword=%ec%b2%ad%eb%b0%94%ec%a7%80" />
      <meta property="og:title" content="옥션 - 청바지 : 모바일 쇼핑은 옥션" />
      <meta property="og:description" content="옥션 내 청바지 상품입니다." />
      <meta property="og:image" content="//pics.auction.co.kr/pc/common/sns/facebook/default.png" />
      <meta property="og:image:alt" content="옥션 청바지 상품" />
      <script async="" src="https://tags.bkrtx.com/js/bk-coretag.js"></script>
      <script async="" src="https://montelena.auction.co.kr/montelena.js?path=http://browse.auction.co.kr/m/search?keyword=%EC%B2%AD%EB%B0%94%EC%A7%80"></script>
      </Fragment>
    );
  }
}

export default Head;
