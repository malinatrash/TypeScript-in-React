import React, {FC, PropsWithChildren, useState} from 'react';

export enum CardVariant {
    outlined ='outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string
    height?: string
    variant: CardVariant
    onClick: (number: number) => void
}

const Card: FC<PropsWithChildren<CardProps>> =
    ({width,
        height,
        children,
        onClick,
        variant,
    }) => {
        const [state] = useState(0);
        return (
        <div
            onClick={() => onClick(state)}
            style={{width, height,
                border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
                background: variant === CardVariant.outlined ? 'lightgray' : ''}}>
            {children}
        </div>
    );
};

export default Card;
