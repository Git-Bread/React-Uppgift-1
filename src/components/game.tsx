interface Props {
    title: string;
    description: string;
    releaseDate: string;
    genre: string;
    rating: number;
    good: boolean;
}

//games prop class with all the funny values
const Game: React.FC<Props> = ({ title, description, releaseDate, genre, rating, good }) => {
    return (
        <article className="box mr-4 FIX-MARGIN">
            <div className="content">
                <h2 className="title">{title}</h2>
                <p className="subtitle">{genre}</p>
                <p>{description}</p>
                <div className="is-flex is-justify-content-space-between">
                    <p>Release Date: {releaseDate}</p>
                    <p>Rating: {rating}/10</p>
                    <p>Good: {good ? "Yes" : "No"}</p>
                </div>
            </div>
        </article>
    );
};

export default Game;