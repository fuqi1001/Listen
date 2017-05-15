import React, { Component, PropTypes } from 'react';
import axios from 'axios';
let Guide = React.createClass({
    getInitialState() {
        return {
            link: "",
        }
    },
    async getMusicInfo() {
        console.log("run here")
        const newLink = await axios.get("https://api.imjad.cn/cloudmusic/?type=song&id=454224836&br=128000");
        console.log(newLink.data.data[0].url);
        this.setState({link: newLink.data.data[0].url});
        this.forceUpdate();
    },
    forceUp() {
        this.forceUpdate();
    },
    componentDidMount() {
        console.log("link?")
        console.log(this.state);
    },
    shouldComponentUpdate(){
        //alert("update")
    },

    render() {
        //console.log(this);
        return (
            <div>
                <video controls autoPlay="autoplay" name="media" loop src={this.state.link}>
                    
                </video>
                <button onClick={this.getMusicInfo}>Get!</button>
                <button onClick={this.forceUp}>Update!</button>
            </div>
        )
    },

})
export default Guide;