import React, { Component, PropTypes } from 'react';
/*let Guide = React.createClass({
    render() {
        return (
            <div>

            </div>
        );
    }
});
*/

class Guide extends Component {
    
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        axios.get("https://api.imjad.cn/cloudmusic/?type=song&id=454224836&br=128000")
            .then(res =>{
                console.log(res);
            })
    }

    render() {
        console.log(this);
        return (
            <div>
                <video controls autoPlay="autoplay" name="media" loop>
                    <source src="https://m7.music.126.net/20170512120703/5ec4767ac3343c3c19ac30f6dbedc8af/ymusic/b4d6/b8c0/8db3/ef806e0936f461b0e08dd4da17ce25c3.mp3" type="audio/mpeg"/>
                </video>
            </div>
        )
    }
}
export default Guide;