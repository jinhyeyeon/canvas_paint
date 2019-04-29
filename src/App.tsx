import * as React from 'react';
import './styles/app.scss';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Footer />
            </div>
        )
    }
}

export default App;