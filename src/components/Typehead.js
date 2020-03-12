import React, { useState } from "react";
import data from "../data";
import app from "./App";
import styled from "styled-components";

function Typehead({ handleSelect, suggestions }) {
  let [data, setData] = useState("");
  //console.log(suggestions, "xxxSuggestionsxxxx"); suggestions is my book array
  //console.log("________--------", typeof data); data is simply string
  let matches = suggestions.filter(x => {
    //console.log(x.title, "------")
    let z = data.length > 1;
    let y = x.title.toLowerCase().includes(data.toLowerCase());
    //  console.log(data, "DATA DATA");
    //console.log(z, "zzzzzzzzzzzzzz");
    //console.log(y);
    return y && z;
  });
  const handleTitle = (title, char) => {
    const firstHalf = title.slice(0, char);
    const secondHalf = title.slice(char);
    console.log(char, "CHAR");
    return [firstHalf, secondHalf];
  };
  //console.log(splitOne);
  return (
    <Container>
      <InputText
        type="text"
        value={data}
        onChange={ev => setData(ev.target.value)}
      ></InputText>
      <MyButton onClick={() => setData("")}>Liverpool Sucks</MyButton>
      {/* {console.log(matches, "____------____----")} */}
      {matches.length > 0 ? (
        <ContainList>
          {matches.map(match => {
            const parsedTitle = handleTitle(match.title, matches.length - 1);
            //console.log(parsedTitle[0], "Whats happening----");
            return (
              <DaList
                key={match.title}
                onClick={() => handleSelect(match.title)}
              >
                <span>
                  {parsedTitle[0]}
                  <BoldSpan>{parsedTitle[1]}</BoldSpan>
                  <Category>{match.categoryId}</Category>
                </span>
              </DaList>
            );
          })}
        </ContainList>
      ) : (
        <> </>
      )}
    </Container>
  );
}

const Container = styled.div`
  border: 2px red solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
`;

const InputText = styled.input`
  width: 500px;
  font-size: 3em;
  border-radius: 20px;
  margin: 0;
`;

const BoldSpan = styled.span`
  font-weight: bold;
`;

const Category = styled.span`
  font-style: italics;
  color: purple;
`;

const DaList = styled.li`
  border: red 1px dotted;
  font-size: 2.5em;
  width: 100%;
  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }
`;

const MyButton = styled.button`
  position: relative;
  width: 200px;
  padding: 20px;
  border-radius: 15px;
  color: white;
  font-size: 1.2em;
  background-color: blue;
  margin: 0;
`;
const ContainList = styled.ul`
  text-decoration: none;
  list-style-type: none;
  width: 1000px;
  line-height: 1.5;
  border: 2px black solid;
  box-shadow: 2px 5px 36px rgba(0, 0, 0, 0.1);
`;

export default Typehead;
