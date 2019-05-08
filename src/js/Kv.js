import React from 'react';
import KeyVisual from '../images/KV_1920x768.jpg'
import KeyVisual_m from '../images/KV_960x768.jpg'
import styled, { css } from 'styled-components'

function Kv(props) {
    return (
        <header className='flexContainer'>
            <img className='img-responsive KV' src={KeyVisual} alt=""/>
            <img className='img-responsive KV-m' src={KeyVisual_m} alt=""/>
            <div className="copy">
                <h1>3D遊戲重建現實建築</h1>
                <h2>從建模到遊戲開發&nbsp;<br/>教你打造擬真遊戲畫面不藏私</h2>
            </div>
        </header>
    );
}

export default Kv;