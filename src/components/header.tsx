import React from 'react';

interface Props {
    title: string;
    image: string;
    imageAlt?: string;
}

const Header: React.FC<Props> = ({ title, image, imageAlt = "No Alt" }) => {
    return (
        <>
            <header className='header'>
                <h1 className="title">{title}</h1>
            </header>
            <div>
                <img src={image} className="hero" alt={imageAlt} />
            </div>
        </>
    );
};

export default Header;