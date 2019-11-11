import React, { Component, Fragment } from 'react';

  class Footer extends Component {
  render() {
    return (
      <div id="imFooter">
        <footer id="footer">
            <div className="box__shortcut-links">
                <a className="link__shortcut">고객센터</a>
                <a className="link__shortcut" id="footer_login">로그인</a>
            </div>
            <div className="box__corp">		
                <p className="text__corp-name">
                    <a href="#" className="link__corp-name sprite__footer--after">(주)이베이코리아</a>
                </p>
                <ul className="list__corp-info">
                <li className="list-item__corp-info">대표이사 : 변광윤</li>			
                <li className="list-item__corp-info">사업자등록번호 : 220-81-83676 
                    <a target="_blank" className="link__corp-check sprite__footer--after">사업자정보확인</a>
                </li>
                <li className="list-item__corp-info">통신판매업신고 : 강남 10630호 서울시 강남구 테헤란로 152 (역삼동 강남파이낸스센터)</li>
                <li className="list-item__corp-info">고객센터 : <a>1588-0184</a> (평일 오전9시-오후6시 )</li>
                <li className="list-item__corp-info">스마일클럽&amp;VVIP : <a>1522-8900</a> (연중무휴 오전9시-오후6시)</li>
                <li className="list-item__corp-info">이메일 : <a className="link__contect">information@corp.auction.co.kr</a></li>
                </ul>
            </div>
            <div className="box__terms">
                <a className="link__terms">이용약관</a>
                <a className="link__terms">개인정보처리방침</a>
            </div>
            <p className="text__notice">옥션은 통신판매 중개자이며 통신판매의 당사자가 아닙니다. 따라서 옥션은 상품 거래정보 및 거래에 대하여 책임을 지지 않습니다. 본 사이트/앱 상의 모든 정보, 콘텐츠, UI 등에 대한 무단 복제, 배포, 스크래핑 등의 행위는 법에 의하여 엄격히 금지됩니다.</p>
            <p className="text__copyright">Copyright © eBay Korea Co., Ltd. All rights reserved.</p>
            <a className="link__app-install sprite__footer--before sprite__footer--after">옥션 APP 다운받기</a>
        </footer>
    </div>
    );
  }
}

export default Footer;
