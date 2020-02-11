import React from "react";
import LowestChild from "./LowestChild";

class NestedInParent extends React.Component {
    render () {
        return (
            <div className={'nested-in-parent'}>
                <LowestChild display1 = {this.props.display}/>
            </div>
        )
    }
}

export default NestedInParent;