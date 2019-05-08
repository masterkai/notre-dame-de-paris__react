import $ from 'jquery'
// import {goSubmit, checkinfo, s, f, QueryString} from '../services/validate'
import React, {Fragment} from 'react';
import Navbar from './Navbar'
import Kv from './Kv'
import VideoSection from './VideoSection'



class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}

    }

    componentDidMount() {
        console.log('hello, world!!!!');
    }

    render() {
        return (
            <Fragment>
                <Navbar/>
                <Kv />
                <VideoSection />
            </Fragment>
        )
    }
}

export default App;