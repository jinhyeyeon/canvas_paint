import * as React from 'react';
import './header.scss';
import classNames from 'classnames';
import Controller from '../Controller/Controller';

const COLOR = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'purple'
]

interface Props {
}
interface State {
    color: string;
    on?: boolean;
}

class Header extends React.Component<Props, State> {
    state: State = {
        color: COLOR[0],
        on: false
    }
    render() {
        const {
            
        } = this.props;
        const {
            color,
            on
        } = this.state;
        return (
            <header className="header clearfix">
                <Controller />
                <ul className="colors">
                    {COLOR.map(color => (
                        <li
                            className={classNames({on: color === this.state.color})}
                            onClick={() => this.setState({color})}
                            style={{backgroundColor: color}}
                        />
                    ))}
                </ul>
            </header>
        )
    }
}

export default Header;