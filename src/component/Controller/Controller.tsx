import * as React from 'react';
import classNames from 'classnames';
import './controller.scss';
import Btn1 from '../Btn1/Btn1';

interface Props {
    onIncrease?: () => void;
    onDecrease?: () => void;
}

interface State {
    value: number;
}

class Controller extends React.Component<Props, State> {
    state = {
        value: 10
    }

    render() {
        const {
            onIncrease,
            onDecrease
        } = this.props;
        const {
            value
        } = this.state;

        return (
            <ul className="controller">
                <li>
                    <Btn1
                        onClick={() => {
                            value > 0 && this.setState({value: value - 1})
                        }}
                    >
                        -
                    </Btn1>
                </li>
                <li>
                    <input
                        type="number"
                        value={value}
                        onChange={({target: {value}}) => this.setState({value: Number(value)})}
                    />
                </li>
                <li>
                    <Btn1
                        onClick={() => {
                            value < 100 && this.setState({value: value + 1})
                        }}
                    >
                        +
                    </Btn1>
                </li>
            </ul>
        )
    }
}

export default Controller;
