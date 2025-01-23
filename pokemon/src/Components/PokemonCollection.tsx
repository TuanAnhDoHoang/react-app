import React from 'react';
import {Pokemon, Detail, PokemonDetail} from '../interface'
import {PokemonList} from './PokemonList'
interface Props{
    pokemons: PokemonDetail[];
    viewDetail:Detail,
    setDetail: React.Dispatch<React.SetStateAction<Detail>>,
}
export const PokemonCollection: React.FC<Props>  = (props) => {
    const {pokemons, viewDetail, setDetail} = props;
    const handleViewDetail = (id: number) => {
        if(viewDetail.isOpen == false){
            setDetail({
                id,
                isOpen: true
            })
        }
        else console.log('x');
    }
    return (
        <>
        <section className=
         {
             viewDetail.isOpen == true? 'collection-container-active' : 'collection-container'
         }
        >
        {/* {viewDetail.isOpen?(
            <div className="overlay"></div>
        ):(
            <div className=""></div>
        )} */}
        {pokemons.map((poke) => {return (
            
            <div onClick={() => handleViewDetail(poke.id)} key={poke.id}>
                <PokemonList
                key = {poke.id}
                name = {poke.name}
                id = {poke.id}
                image = {poke.sprites.front_default}
                abilities={poke.abilities}
                viewDetail={viewDetail}
                setDetail={setDetail}
                />
            </div>)}
        )}
        </section>
        </>
    );
}