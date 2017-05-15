import React from 'react';
var OuterComponent = React.createClass({
    render: function() {
        return (
            <div className="outer">
                <InnerComponent name="Alex">
                    This is a message
                </InnerComponent>
                <InnerComponent name="Bob">
                    <span>first message</span><br />
                    <span>Second message</span>
                </InnerComponent>
            </div>
        );
    }
});

var InnerComponent = React.createClass({
    render: function() {
        return (
            <div className="inner">
                <h2>{this.props.name}</h2>
                <p>{this.props.children}</p>   
            </div>
        );
    }
});

export default OuterComponent;