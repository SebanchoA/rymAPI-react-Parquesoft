import { useEffect, useState } from "react";
import { getAllCharacters } from "../servicios/rymService";
import ModalBasico from "./CharacterModal";
import { Button } from '@mui/material';

export default function RickAndMorty(){

    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false); // Cambiado de 'open' a 'isOpen'
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const apiURL = "https://rickandmortyapi.com/api";

    useEffect(() => {
        async function fetchData() {
            const url = apiURL + '/character';
            let response = await getAllCharacters(url);
            console.log(response);
            setData(response.results);
        }
        fetchData();
    },[])

    const handleOpen = (character) => {
        setSelectedCharacter(character);
        setIsOpen(true);
      };
    
      const handleClose = () => setIsOpen(false);
    
      return (
        <div>
          {data.map((character) => (
            <Button key={character.id} onClick={() => handleOpen(character)}>
              {character.name}
            </Button>
          ))}
    
          <ModalBasico open={isOpen} handleClose={handleClose} selectedCharacter={selectedCharacter} />
        </div>
      );
    }