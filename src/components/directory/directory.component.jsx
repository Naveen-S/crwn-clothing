import React from "react";
import { connect } from "react-redux";
import MenuItem from "../menu-item/menu-item.component";
import { DirectorySectionSelector } from '../../redux/selectors/DirectorySelector';
import "./directory.style.scss";

function Directory({sections}) {
  return (
    <div className="directory-menu">
      {sections.map((section) => {
        return <MenuItem key={section.id} {...section} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {sections: DirectorySectionSelector(state)}
}
export default connect(mapStateToProps)(Directory);
