import React from 'react';

interface Props {
    title: string;
    description: string;
    releaseDate: string;
    genre: string;
}

const Game: React.FC<Props> = ({ title, description, releaseDate, genre }) => {
    return (
        <article className="box column is-narrow mr-4 FIX-MARGIN">
            <div className="content">
                <h2 className="title">{title}</h2>
                <p className="subtitle">{genre}</p>
                <p>{description}</p>
                <p><strong>Release Date:</strong> {releaseDate}</p>
            </div>
        </article>
    );
};

export default Game;