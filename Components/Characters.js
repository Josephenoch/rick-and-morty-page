import React from 'react';
import Image from "next/image";
import styles from '../styles/Home.module.css'

const Characters = ({characters}) =>{
  return (<> 
      {characters.map((character)=>{
          return(
                <a
                    href={character.image}
                    className={styles.card}
                    target="_blank"
                    key={character.id}>

                    <Image src={character.image} width={300} height={300}/>
                    <h2>{character.name}</h2>
                    <p>Origin:{character.origin.name}</p>
                    <p>Location:{character.location.name}</p>
                </a>
          )
      })}
  </>);
}

export default Characters