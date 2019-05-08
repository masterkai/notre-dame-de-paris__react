import React from 'react';
import YouTube from 'react-youtube';

class VideoSection extends React.Component {
    render() {
        const opts = {
            height: '100%',
            width: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                controls: 0,
                rel: 0,
                showinfo: 0
            }
        };

        return (
            <YouTube
                videoId="tgJH1mE6UCM"
                opts={opts}
                onReady={this._onReady}
            />
        );
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.playVideo();
    }
}
export default VideoSection;