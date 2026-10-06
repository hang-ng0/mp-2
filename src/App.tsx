import RickAndMorty from "./components/RickAndMorty.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";

const ParentDiv=styled.div`
    margin: auto;
    border: 5px black solid;
`;

const Heading1 = styled.h1`
  color: white;
  text-align: center;
  font: calc(4px + 3vw) Impact, fantasy, Arial;
  letter-spacing: 0.1vw;
`;

export default function App(){

  // useState Hook to store Data.
  const [data, setData] = useState<any>([]);

  // useEffect Hook for error handling and re-rendering.
  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch("https://rickandmortyapi.com/api/character");
      const {results} : {results: any} = await rawData.json();
      setData(results);
    }
    fetchData()
        .then(() => console.log("Data fetched successfully"))
        .catch((e: Error) => console.log("There was the error: " + e));
  }, [data.length]);

  return(
      <ParentDiv>
        <Heading1>Rick and Morty</Heading1>
        <RickAndMorty data={data}/>
      </ParentDiv>
  )
}