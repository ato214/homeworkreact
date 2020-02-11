import React from "react";
import LowLow from "./LowLow";

class LowestChild extends React.Component {
    render() {
        return (
            <div className={'lowest-child'}>
                <LowLow display2 = {this.props.display1}/>
            </div>
        )
    }
}

export default LowestChild;