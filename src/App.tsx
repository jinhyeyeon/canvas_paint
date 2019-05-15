import * as React from 'react';
import './styles/app.scss';
import {SketchField, Tools} from 'react-sketch';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import ColorPicker, {COLOR} from './component/ColorPicker/ColorPicker';

interface State {
    color: string;
    value: number;
}

class App extends React.Component<{}, State> {
    state: State = {
        color: COLOR[0],
        value: 10
    }

    render() {
        const {
            color,
            value
        } = this.state;

        return (
            <div className="app">
                <Header
                    onChange={(color) => {
                        this.setState({color});
                    }}
                    onMinus={(value) => {
                        this.setState({value});
                    }}
                    onPlus={(value) => {
                        this.setState({value});
                    }}
                />
                <SketchField
                    className="canvas-wrap"
                    height="785px" 
                    tool={Tools.Pencil} 
                    lineColor={color}
                    lineWidth={value}
                />
                <Footer />
            </div>
        )
    }
}

export default App;