import React from 'react';
import ReactDOM from 'react-dom';

function tick(){
    const element=(
        <div className="tick">
            It is{' '}
            {new Date().toLocaleTimeString()}.
        </div>
    )
    ReactDOM.render(element,document.getElementById('tick'));
}
setInterval(tick,1000);

export default tick;