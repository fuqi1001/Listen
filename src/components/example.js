import React from 'react';
var OuterComponent = React.createClass({
    getInitialState() {
            return {
                name:"nobody"
            }
    },
    componentDidMount() {
        setTimeout(function(){
            this.setState({name:"Alex"});
        }.bind(this),2000 );
    },

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
                <div>
                    <strong>{this.state.name}</strong>
                </div>  
                <div>
                    <TestRefs />
                </div>
            </div>
        );
    }
});

var TestRefs = React.createClass({
    handleChange(e) {
        var user = this.refs.user;
        var name = this.refs.name;
        name.innerHTML = user.value;
    },
    render: function() {
        return (
            <div>
                <input type="text" ref="user" placeholder="your name" onChange={this.handleChange} />
                <p>Hello <span ref="name"></span></p>
            </div>
        )
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