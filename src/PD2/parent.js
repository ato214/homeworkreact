import React from "react";
import NestedInParent from "./nestedInParent";

class Parent extends React.Component {
  render() {
    const author = { name: "Jan", surname: "Kowalski" };
    return (
      <div className={"parent"}>
        <NestedInParent display={author} />
      </div>
    );
  }
}

export default Parent;
