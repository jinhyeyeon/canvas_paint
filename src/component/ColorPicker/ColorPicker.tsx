import * as React from 'react';
import './color-picker.scss';
import classNames from 'classnames';

export const COLOR = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'purple'
]

interface Props {
    onChange: (color: string) => void;
}

interface State {
    color: string;
    on?: boolean;
}

class ColorPicker extends React.Component<Props, State> {
    defaultProps: Partial<Props> = {
        onChange: () => null,
    };

    state: State = {
        color: COLOR[0],
        on: false
    }

    render() {
        const {
            color,
            on
        } = this.state;
        return (
            <ul className="color-picker">
                {COLOR.map(color => (
                    <li
                        className={classNames({on: color === this.state.color})}
                        onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                            const {onChange} = this.props;

                            this.setState({color})
                            onChange(color);
                        }}
                        style={{backgroundColor: color}}
                    />
                ))}
            </ul>
        )
    }
}

export default ColorPicker;