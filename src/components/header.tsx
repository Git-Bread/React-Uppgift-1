import React from 'react';

interface Props {
    title: string;
    image: string;
    imageAlt?: string;
}

const Header: React.FC<Props> = ({ title, image, imageAlt = "No Alt" }) => {
    return (
        <>
            <header className='p-4 border-bottom border-3'>
                <h1 className="title has-text-centered">{title}</h1>
            </header>
            <section className="hero">
                <figure className='image is-3by1'>
                    <img src={image} className="image" alt={imageAlt} />
                </figure>
            </section>
        </>
    );
};

export default Header;