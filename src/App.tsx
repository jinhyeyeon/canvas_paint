import * as React from 'react';
import './styles/app.scss';
import Header from './component/Header/Header';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
            </div>
        )
    }
}

export default App;