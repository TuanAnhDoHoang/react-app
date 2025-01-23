import React, { useEffect } from "react";
import './pokemon.css'
import {useState} from 'react'
import {Detail} from '../interface'

interface Props{
    id: number;
    name: string;
    image: string, 
    abilities?:{
        name:string,
        url:string,
    }[] | undefined,
    viewDetail: Detail,
    setDetail: React.Dispatch<React.SetStateAction<Detail>>,
}
export const PokemonList: React.FC<Props> = (props) => {
    const {id, name, image, abilities, viewDetail, setDetail} = props;
    const [isSelected, setSelection] = useState(false);
    useEffect(
        ()=>{
            setSelection(viewDetail.id === id);
        }, [viewDetail]);
    const handleClose=()=>{
        setDetail({
            id:0,
            isOpen:false
        })
    }
    return (
        <div className="">
            {isSelected?(
                <section className="pokemon-list-detialed">
                    <div className="detail-container">
                        <p className="detail-close" onClick={handleClose}>
                            X
                        </p>
                        <div className="detail-info">
                            <img src={image} alt="pokemon" className="detail-img"/>
                            <p className="detail-name">{name}</p>
                        </div>
                        <div className="detail-skill">
                            <p className="detail-ability">Abilities: </p>
                            {abilities?.map((ab: any, index) => (
                                <div key={index}>{ab.ability.name}</div>
                            ))}
                        </div>
                    </div>
                </section>
            ) : 
            (<section className="pokemon-list-container">
                <p className="pokemon-name">{name}</p>
                <img src={image} alt="pokemon" />
            </section>)}
        </div>
    );
}
export default PokemonList;