import * as React from 'react';
import './styles/app.scss';
import {SketchField, Tools} from 'react-sketch';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import ColorPicker, {COLOR} from './component/ColorPicker/ColorPicker';

interface State {
    color: string;
}

class App extends React.Component<{}, State> {
    state: State = {
        color: COLOR[0]
    }

    render() {
        const {color} = this.state;

        return (
            <div className="app">
                <Header
                    onChange={color => {
                        this.setState({color});
                    }}
                />
                <SketchField
                    className="canvas-wrap"
                    height="785px" 
                    tool={Tools.Pencil} 
                    lineColor={color}
                    lineWidth={10}
                />
                <Footer />
            </div>
        )
    }
}

export default App;