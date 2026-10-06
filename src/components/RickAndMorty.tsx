import styled from "styled-components";

const AllCharsDiv = styled.div`
    display: flex;
    flex-flow: row wrap; //code from the Professor's GitHub 
    justify-content: space-evenly; //code from the Professor's GitHub to space things evenly 
    background-color: #A9F3FD;
    width: 100%;
`;

const SingleCharDiv = styled.div<{ status: string }>`
    display: flex;
    flex-direction: row; //flex direction row because I want to showcase the image on the left side and then words on the right
    gap: 5%; //ensuring there's spacing between the image and words
    max-width: 40%; //fit 2 character card in 1 row
    padding: 1.5%;
    margin: 1%;
    background-color: ${(props) => (props.status === "Alive" ? '#FFC78F' : 'black')};
    color: ${(props) => (props.status !== "Alive" ? 'white' : 'black')};
    border: 3px black solid;
    font: small-caps bold calc(2px + 1vw) Arial, sans-serif;
`;

const StyledImage = styled.img`
    width: 50%;
    height: auto;
`;

const CharInfo = styled.div<{ status: string }>`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

const StyleHeader = styled.h1`
    color: ${(props) => (props.status !== "Alive" ? '#F7931E' : '#0E0F3B')};
    text-align: left;
    font: calc(4px + 2.5vw) fantasy, impact, arial;
    letter-spacing: 0.05vw; //I like the font but the letter were too close together
`;

const GenderPara = styled.p`
    color: ${(props) => (props.gender !== "Male" ? '#D32C98' : '#0096c7')};
`;


export default function RickAndMorty(props: { data: Char[] }) {
    return (
        <AllCharsDiv>
            {
                props.data.map((api: Char) =>
                    <SingleCharDiv key={api.id} status={api.status}>
                        <StyledImage src={api.image} alt={`image of ${api.name}`}/>
                        <CharInfo>
                            <StyleHeader status={api.status}>{api.name}</StyleHeader>
                            <p>{api.status}</p>
                            <p>{api.species !== "Human" ? "(Not Human)" : ""}</p>
                            <GenderPara gender={api.gender}>{api.gender}</GenderPara>
                            <p>Origin: {api.origin.name}</p>
                            <p>Last known location: {api.location.name}</p>
                        </CharInfo>
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}