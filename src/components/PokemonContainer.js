import './PokemonContainer.css'

function PokemonContainer({pokemonResultImage, pokemonResult, pokemonType}) {



const colors = {
  fire:'#FDDFDF',
  grass:'#DEFDE0',
  electric:'#FCF7DE',
  water:'#DEF3FD',
  ground:'#f4e7da',
  rock:'#d5d5d4',
  fairy:'#fceaff',
  poison:'#98d7a5',
  bug:'#f8d5a3',
  dragon:'#97b3e6',
  psychic:'#eaeda1',
  flying:'#F5F5F5',
  fighting:'#E6E0D4',
  normal:'F5F5F5',
}


const color = colors[pokemonType]

  return (
    <>
    <div className='poke-container'>
      <div className='pokemon-component' style={{backgroundColor: color}}>
        <div className='img-container'>
          <img src={pokemonResultImage} alt={pokemonResult.name}></img>
        </div>
        <div className='info'>
          <span className='number'>#{pokemonResult.id}</span>
          <h3 className='name'>{pokemonResult.name}</h3>
          <small className='type'>Type: <span>{pokemonType}</span></small>
        </div>
      </div>
    </div>
    </>
  );
}

export default PokemonContainer;