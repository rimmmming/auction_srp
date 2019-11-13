import React, { Component } from "react";

class ItemFilter extends Component {
  render() {
    const { searchKeyword } = this.props;
    return (
      <div className="section--module_wrap">
        <div className="section--search_relative_information section--selected_keywords_container">
          <div className="section--relative_keywords">
            <ul className="list--relative_keywords">{searchKeyword()}</ul>
          </div>
        </div>
      </div>
    );
  }
}
export default ItemFilter;
