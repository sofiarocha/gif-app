import React from 'react';
import Gif from "./Gif";

const GifList = ({ gifs }) => {
    return (
        <div className="giflist">
            {gifs.map(gif => <Gif src={gif} />)}
        </div>
    );
};

export default GifList;
