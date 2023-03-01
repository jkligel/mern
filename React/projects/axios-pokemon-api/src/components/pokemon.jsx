import '../App.css'

const Pokemon = (props) => {
    const {pokemon} = props;

    return(
        <ol className='Pokemon'>
            {
                pokemon.map( (poke, idx) => <li key={idx}>{poke.name}</li>)
            }
        </ol>
    )
}

export default Pokemon;