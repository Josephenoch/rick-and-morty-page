import React from 'react';
import Image from "next/image";
import styles from '../styles/Home.module.css'

const Characters = ({characters}) =>{
  const textStyle ={
        textOverflow:"ellipsis", 
        whiteSpace:"nowrap", 
        overflow:"hidden"
    }
  return (<> 
      {characters.map((character)=>{
          return(
                <a
                    href={character.image}
                    className={styles.card}
                    target="_blank"
                    key={character.id}
                    rel="noreferrer"
                >

                    <Image src={character.image} width={300} height={300} alt={character.name}/>
                    <h2 style={textStyle}>{character.name}</h2>
                    <p style={textStyle}>Origin:{character.origin.name}</p>
                    <p style={textStyle}>Location:{character.location.name}</p>
                </a>
          )
      })}
  </>);
}

export default Characters