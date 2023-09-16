import {  createContext, useContext, useState } from "react";


const contextData = {
  song: "Aitana",
  year: 2023
}

const MainContext = createContext(contextData);



export const Main = () => {
    const [user, setUser] = useState("Jesse Hall");


    return (
        <MainContext.Provider value={contextData} >
          <h1>{`Hello ${user}!`}</h1>
          <FirsChild />
        </MainContext.Provider>
      );
}


const FirsChild = ()=> {
    return <>
    <SecondChild />
    </>
}

function SecondChild() {
    return (
      <>
        <h1>Component 3</h1>
        <ThirdChild />
      </>
    );
}

function ThirdChild() {
    return (
      <>
        <h1>Component 3</h1>
        <FouthChild />
      </>
    );
}

function FouthChild() {
    return (
      <>
        <h1>Component 3</h1>
        <FifthChild />
      </>
    );
}

function FifthChild() {
    const mainContext = useContext(MainContext);

    return (
      <>
        <h1>Component 3</h1>
        <h2>{`Hello ${mainContext.song} again!`}</h2>
      </>
    );
}