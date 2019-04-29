import * as React from 'react';
import classNames from 'classnames';
import './btn1.scss';

interface Props {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

const Btn1: React.FunctionComponent<Props> = ({className, onClick, children}: Props) => {
    return (
        <button
            className={classNames('btn1', className)}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Btn1;
