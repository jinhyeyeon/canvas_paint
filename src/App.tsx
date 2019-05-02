import * as React from 'react';
import './styles/app.scss';
import {SketchField, Tools} from 'react-sketch';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                <SketchField
                    className="canvas-wrap"
                    height="785px" 
                    tool={Tools.Pencil} 
                    lineColor="red"
                    lineWidth={10}
                />
                <Footer />
            </div>
        )
    }
}

export default App;