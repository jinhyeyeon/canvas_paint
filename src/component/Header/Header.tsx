import * as React from 'react';
import './header.scss';
import Controller from '../Controller/Controller';
import ColorPicker from '../ColorPicker/ColorPicker';

interface Props {
    onChange: (color: string) => void;
    onMinus: (value: number) => void;
    onPlus: (value: number) => void;
}

class Header extends React.Component<Props> {
    render() {
        const {
            onChange,
            onMinus,
            onPlus
        } = this.props;
        return (
            <header className="header clearfix">
                <Controller
                    onMinus={onMinus}
                    onPlus={onPlus}
                />
                <ColorPicker
                    onChange={onChange}
                />
            </header>
        )
    }
}

export default Header;