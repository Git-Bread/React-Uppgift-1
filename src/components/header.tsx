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
            <section>
                <figure className='image is-3by1 mh-400 m-auto'>
                    <img src={image} className="image mh-400 is-centered" alt={imageAlt} />
                </figure>
            </section>
        </>
    );
};

export default Header;