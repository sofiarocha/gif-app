import React, { Fragment, Component } from "react";
import SelectedGif from "./SelectedGif";
import GifList from "./GifList";

const gifs = [
    "https://media.giphy.com/media/KEh5kliRTSVJm/giphy.gif",
    "https://media.giphy.com/media/7ojeb3qz5r9jG/giphy.gif",
    "https://media.giphy.com/media/wzLjZseWRBwBy/giphy.gif",
    "https://media.giphy.com/media/EEq4P6RNIyb04/giphy.gif",
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGif: "https://media.giphy.com/media/KEh5kliRTSVJm/giphy.gif"
        };
    }

    render() {
        const { selectedGif } = this.state;
        return (
            <Fragment>
                <SelectedGif selectedGif={selectedGif} />
                <GifList gifs={gifs} />
            </Fragment>
        );
    }
}

export default App;
