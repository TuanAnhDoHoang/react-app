export interface Pokemon{
    id: number;
    name: string;
    sprites: {
        front_default: string,
    };
}
export interface Detail{
    id:number,
    isOpen: boolean,
}
export interface PokemonDetail extends Pokemon{
    abilities?:{
        name: string,
        url: string,
        
    }[]
}