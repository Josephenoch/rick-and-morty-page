import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Head from 'next/head'
import { useState } from "react";
import Characters from "../Components/Characters";
import styles from '../styles/Home.module.css'

export default function Home(results) {
  const initialState = results
  const [characters, setCharacters] = useState(initialState.characters)
  console.log(characters)
  return (
    <div className={styles.container}>
      <Head>
        <title>Wubalubadubdub</title>
        <meta name="description" content="A rick and morty page with next js apollogql and graphql" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span>Rick and Morty Page</span>
        </h1>

        <div className={styles.grid}>
         <Characters characters={characters}/>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://josephenoch.github.io/reactportfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>&copy; By Joseph Enoch</span>
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps(){
  const client = new ApolloClient({
    uri:"https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache
  })
  const {data} = await client.query({
    query: gql`
    query{
      characters(page:1){
        info{
          count
          pages
        }
        results{
          name
          id
          location{
            id
            name
          }
          origin{
            id
            name
          }
          episode{
            id
            air_date
          }
          image
        }
      }
    }
    `
  })
  return{
    props:{
      characters:data.characters.results,
    }
  }
}
