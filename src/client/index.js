import React from "react";
import {render} from "react-dom";
import "./style/main.css";

function addLabel(Control) {
    return class extends React.Component {
        render() {
            return <label>
                {this.props.label}
                {Control}
            </label>;
        }
    }
}

const App = () => {
    const LabeledPassword = addLabel(<input type={"password"}/>);
    const LabeledText = addLabel(<input type={"text"}/>);

    return <div>
        <LabeledText label='Name:'/>
        <br/>
        <LabeledPassword label='Password:'/>
    </div>
};

render(
    <App/>, document.getElementById("app")
);


