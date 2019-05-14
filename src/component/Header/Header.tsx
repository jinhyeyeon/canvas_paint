import * as React from 'react';
import './header.scss';
import Controller from '../Controller/Controller';
import ColorPicker from '../ColorPicker/ColorPicker';

interface Props {
    onChange: (color: string) => void;
}

class Header extends React.Component<Props> {
    render() {
        const {onChange} = this.props;
        return (
            <header className="header clearfix">
                <Controller/>
                <ColorPicker onChange={onChange} />
            </header>
        )
    }
}

export default Header;