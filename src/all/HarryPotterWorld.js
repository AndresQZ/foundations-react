import  React, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react"
import styles from './wrapAll.module.css'; 
import {OrderedList } from './../component/OrderedList'


const layoutSystemNames = new Map([
  [0, "flexbox"],
  [1, "Grid"]
])

const appState = {
    data: [],
    isError: false,
    isShowDetail: false
}


const actionsMap = new Map([
    ["data", "data" ],
    ["error", "isError"],
    ["showDetail", "isShowDetail"]
])


const reducerState = (state, action) => {
    const typeAction = actionsMap.get(action.type)

    return {
        ...state,
        [typeAction]: action.payload
    }
}


const spells = [
  {
    "spell": "Accio",
    "use": "Summoning charm",
    "index": 0
  },
  {
    "spell": "Glisseo",
    "use": "Turns a staircase into a slide",
    "index": 1
  },
  {
    "spell": "Impervius",
    "use": "Protects caster from a variety of substances, including water and fire",
    "index": 2
  },
  {
    "spell": "Wingardium Leviosa/Locomotor",
    "use": "Levitates objects",
    "index": 3
  },
  {
    "spell": "Scourgify",
    "use": "Cleans things",
    "index": 4
  },
  {
    "spell": "Portus",
    "use": "Creates a portkey",
    "index": 5
  },
  {
    "spell": "Orchideous",
    "use": "Grows flowers from end of wand",
    "index": 6
  },
  {
    "spell": "Lumos",
    "use": "Makes wand emit light",
    "index": 7
  },
  {
    "spell": "Reparo",
    "use": "Repairs broken objects",
    "index": 8
  },
  {
    "spell": "Reducio",
    "use": "Shrinks objects",
    "index": 9
  },
  {
    "spell": "Pack",
    "use": "Packs trunks and luggage",
    "index": 10
  },
  {
    "spell": "Riddikulus",
    "use": "Transforms Boggarts into a humorous shape",
    "index": 11
  },
  {
    "spell": "Protego",
    "use": "Shields caster from curses",
    "index": 12
  },
  {
    "spell": "Muffliato",
    "use": "Keeps others nearby from overhearing conversations",
    "index": 13
  },
  {
    "spell": "Silencio/Langlock",
    "use": "Stops someone from talking (by sticking one's tongue to the roof of his/her mouth)",
    "index": 14
  },
  {
    "spell": "Expelliarmus",
    "use": "Disarming Charm",
    "index": 15
  },
  {
    "spell": "Oblivate",
    "use": "Erases memories",
    "index": 16
  },
  {
    "spell": "Episkey",
    "use": "Heals minor injuries",
    "index": 17
  },
  {
    "spell": "Tergeo",
    "use": "Cleans off surfaces",
    "index": 18
  },
  {
    "spell": "Relashio",
    "use": "Forces target to let go of whatever they're holding",
    "index": 19
  },
  {
    "spell": "Confundo",
    "use": "Causes confusions and makes others easily susceptible to influence",
    "index": 20
  },
  {
    "spell": "Expecto Patronum",
    "use": "Patronus Charm",
    "index": 21
  },
  {
    "spell": "Ferula",
    "use": "Conjures bandages",
    "index": 22
  },
  {
    "spell": "Evanesco",
    "use": "Vanishing spell",
    "index": 23
  },
  {
    "spell": "Alohomora",
    "use": "Opens locks",
    "index": 24
  },
  {
    "spell": "Nox",
    "use": "Turns off lumos",
    "index": 25
  },
  {
    "spell": "Quietus",
    "use": "Quiets magically amplified voice",
    "index": 26
  },
  {
    "spell": "Incendio",
    "use": "Creates fire",
    "index": 27
  },
  {
    "spell": "Homenum Revelio",
    "use": "Reveal people nearby",
    "index": 28
  },
  {
    "spell": "Prior Incantato",
    "use": "Reveals last spell cast",
    "index": 29
  },
  {
    "spell": "Finite Incantatem",
    "use": "Negates the effects of many spells",
    "index": 30
  },
  {
    "spell": "Erecto",
    "use": "Erects tents or other structures",
    "index": 31
  },
  {
    "spell": "Diffindo",
    "use": "Cuts or rips material",
    "index": 32
  },
  {
    "spell": "Stupefy",
    "use": "Stuns target",
    "index": 33
  },
  {
    "spell": "Repelo Muggletum",
    "use": "Repels Muggles",
    "index": 34
  },
  {
    "spell": "Avada Kedavra",
    "use": "The Killing Curse",
    "index": 35
  },
  {
    "spell": "Aguamenti",
    "use": "Shoot water from wand",
    "index": 36
  },
  {
    "spell": "Geminio",
    "use": "Creates temporary, worthless duplicate of any object",
    "index": 37
  },
  {
    "spell": "Locomotor Mortis",
    "use": "Leg-lock curse",
    "index": 38
  },
  {
    "spell": "Anapneo",
    "use": "Clears someone's airway",
    "index": 39
  },
  {
    "spell": "Reducto",
    "use": "Explodes object",
    "index": 40
  },
  {
    "spell": "Obscuro",
    "use": "Blindfolds target",
    "index": 41
  },
  {
    "spell": "Impedimenta",
    "use": "Freezes someone advancing toward you",
    "index": 42
  },
  {
    "spell": "Cave Inimicum/Protego Totalum",
    "use": "Strengthens an area's defenses",
    "index": 43
  },
  {
    "spell": "Meteolojinx Recanto",
    "use": "Ends effects of weather spells",
    "index": 44
  },
  {
    "spell": "Specialis Revelio",
    "use": "Reveals hidden magical properties in an object",
    "index": 45
  },
  {
    "spell": "Descendo",
    "use": "Moves objects downward",
    "index": 46
  },
  {
    "spell": "Defodio",
    "use": "Carves through stone and steel",
    "index": 47
  },
  {
    "spell": "Aparecium",
    "use": "Make invisible ink appear",
    "index": 48
  },
  {
    "spell": "Piertotum Locomotor",
    "use": "Animates statues",
    "index": 49
  },
  {
    "spell": "Imperio",
    "use": "Makes target obey every command",
    "index": 50
  },
  {
    "spell": "Fidelius Charm",
    "use": "binds a secret to the soul of a Secret-Keeper",
    "index": 51
  },
  {
    "spell": "Avis/Oppugno",
    "use": "Shoots flock of birds from wand",
    "index": 52
  },
  {
    "spell": "Expulso",
    "use": "Explodes objects",
    "index": 53
  },
  {
    "spell": "Legilimens",
    "use": "Reveals memories and thoughts of target",
    "index": 54
  },
  {
    "spell": "Duro",
    "use": "Hardens objects",
    "index": 55
  },
  {
    "spell": "Sonorus",
    "use": "Amplifies one's voice",
    "index": 56
  },
  {
    "spell": "Deprimo",
    "use": "Creates great downward pressure",
    "index": 57
  },
  {
    "spell": "Levicorpus",
    "use": "Levitates target by ankle",
    "index": 58
  },
  {
    "spell": "Liberacorpus",
    "use": "Lowers target of levicorpus",
    "index": 59
  },
  {
    "spell": "Mobilicorpus",
    "use": "Moves bodies",
    "index": 60
  },
  {
    "spell": "Confringo",
    "use": "Explodes objects into flames",
    "index": 61
  },
  {
    "spell": "Densaugeo",
    "use": "Makes teeth grow quickly",
    "index": 62
  },
  {
    "spell": "Incarcarous",
    "use": "Ties someone up with ropes",
    "index": 63
  },
  {
    "spell": "Deletrius",
    "use": "Dismisses the effects of Prior Incantato",
    "index": 64
  },
  {
    "spell": "Rictusempra",
    "use": "Tickling Charm",
    "index": 65
  },
  {
    "spell": "Petrificus Totalus",
    "use": "Renders target completely immobile",
    "index": 66
  },
  {
    "spell": "Fiendfyre Curse",
    "use": "Makes cursed fire",
    "index": 67
  },
  {
    "spell": "Tarantallegra",
    "use": "Forces target to dance",
    "index": 68
  },
  {
    "spell": "Morsmordre",
    "use": "Conjures the Dark Mark",
    "index": 69
  },
  {
    "spell": "Sectumsempra",
    "use": "Causes severe lacerations",
    "index": 70
  },
  {
    "spell": "Crucio",
    "use": "Causes immense pain",
    "index": 71
  }
]


const houses = [
  {
    "house": "Gryffindor",
    "emoji": "🦁",
    "founder": "Godric Gryffindor",
    "colors": [
      "red",
      "gold"
    ],
    "animal": "Lion",
    "index": 0
  },
  {
    "house": "Hufflepuff",
    "emoji": "🦡",
    "founder": "Helga Hufflepuff",
    "colors": [
      "yellow",
      "black"
    ],
    "animal": "Badger",
    "index": 1
  },
  {
    "house": "Ravenclaw",
    "emoji": "🦅",
    "founder": "Rowena Ravenclaw",
    "colors": [
      "blue",
      "yellow"
    ],
    "animal": "Raven",
    "index": 2
  },
  {
    "house": "Slytherin",
    "emoji": "🐍",
    "founder": "Salazar Slytherin",
    "colors": [
      "green",
      "silver"
    ],
    "animal": "Snake",
    "index": 3
  }
]



const CharacterDetail = React.memo((props) => {
     const {numberItemToDisplay, isBuildingBlocks, charactersListByHouse = [], selectedCharacter={} } = props
     const renders =  useRef(0)
     console.log(`charactersListByHouse :  ${JSON.stringify(charactersListByHouse)}`)
     console.log(`selectedCharacter :  ${JSON.stringify(selectedCharacter)}`)
     const [ layoutSystemId, setLayoutSystemId] = useState(0)
     const [ layoutSystemName, setLayoutSystemName] = useState(layoutSystemNames.get(layoutSystemId))
     const [options, setOptions] = useState([])
     const [selectedOption, setSelectedOption] = useState({})
     
    
     renders.current += 1

     const expensiveFunction = () => {
      setOptions(spells)
      const randomDay = () => Math.floor(Math.random() * 31)
      const filtered = spells.slice(0, numberItemToDisplay)
      const compositeSpells  = filtered.map((item) =>  { return {...item, date: new Date(`2024-07-${randomDay()}`) }})
       return compositeSpells
     }
    // const computedSpells = useMemo(expensiveFunction, [numberItemToDisplay])

  

      const houseColor = (date) => {
        if (date.getDate() >= 0 &&  date.getDate() <= 10) {
        return `green`
        } else if (date.getDate() > 10 &&  date.getDate() <= 20) {
          return `blue`
        } else {
            return `black`
        }
      }

      //const isShowBorder = computedSpells.length > 10


      const GridStyle = {
        display: "grid",
         gridTemplateColumns: "repeat(3, auto )",
        // gridTemplateRows: "repeat(2, auto)",
        gridTemplateAreas: `
        'head head head'
        'content content content'
        'footer footer footer'
        `
      }

      const borderByHouse = () => {
        const house = houses.find(house => selectedCharacter?.hogwartsHouse === house.house)
        if (house) {
          const {colors} =house
          return colors[0]
        }
        else {
          return `black`
        }
      }


      const GridLayoutSystem = () => {
        return  <section style={GridStyle}>
               <div style={{gridArea: "head"}}> {selectedCharacter?.nickname}</div>
               <div style={{gridArea: "content", border: `1px dashed ${borderByHouse()}`}}> {selectedCharacter?.fullName}</div>
               <div style={{gridArea: "footer"}}> {selectedCharacter?.interpretedBy}</div>
             </section>
      }

      const FlexboxLayoutSystem = () => {
        return <>
            <div> Characters by house</div>
             <div className={styles.flexboxLayoutSystem} {...charactersListByHouse?.length > 0 && {"data-flex-wrap": "true"}}>
              {charactersListByHouse.map((character) => {
                return <div key={`${character.index}`} style={{border: "1px dashed brown"}}> {character.fullName} </div>
              })}
             </div>
        </>
      }

      const onChangeSelect = (event) => {
        setSelectedOption(event.target.value)
      }

      const SwitcLayoutSystem = () => {
        setLayoutSystemId((+!layoutSystemId))
        setLayoutSystemName(layoutSystemNames.get(layoutSystemId))
      }
      const layoutSystem =  charactersListByHouse.length > 0 ? <FlexboxLayoutSystem/> : <GridLayoutSystem/>

      return <>
           <button onClick={SwitcLayoutSystem}> switch to { layoutSystemName} </button>
           <p> Number of renders : {renders.current} </p>
           {layoutSystem}
           {/* {computedSpells.map((item, index) => {
              return <span key={`${item.index}`} style={{padding: "0px 3px", color: colorStyle(item.date)}} className={`${isShowBorder ? styles.customColor : `` }`}>{item.spell}|</span> 
           })}  */}

           {/* <select onChange={(event) => onChangeSelect(event)} value={selectedOption}>
           {
            options.map((option) => {
              return <option key={`${option.index}`} value={option.spell}> {option.spell}</option>
            })
           }
           </select> */}

        
      </>

})




const ErrorMessage = (props) => {
    const {httpStatus = 0, error = ""} = props
    return (
        <div>
            <p> The information you asked is not available</p>
            <p>Http status: { httpStatus}, error: {error} </p>
        </div>

    )
}


const CharactersList = (props) => {
  const {characters=[], notifySelectedCharacter, selectedCharacter} =  props

  const onChangeHandler = (event) => {
    notifySelectedCharacter(event.target.value)
  }
  
  return  <select onChange={(event) => onChangeHandler(event)} value={selectedCharacter?.nickname}>
      {characters.map((character) => {
          return <option key={`${character?.nickname}`} value={character.nickname}>Nickname: {character.nickname}</option>
      })}

      </select>
 }


const HousesList = (props) => {
  const {notifySelectedHouse, selectedHouse} = props 
  

  const onChangeHandle = (event) => {
    const foundHouse = houses.find((element) => element.house === event.target.value ) 
    console.log(`foundHouse : ${foundHouse}`)
    if (foundHouse) {
      notifySelectedHouse(foundHouse)
    }
  }

  return <select onChange={(event) => onChangeHandle(event)} value={selectedHouse}>
    {houses.map((item) => {
      return <option key={`${item.index}`} value={item.house}> {item.house} - {item.emoji}</option>
    })}
  </select>
}





const HarryPotterWorld = () => {
   const [state, dispatch] = useReducer(reducerState, appState)
   const [characters, setCharacters] =  useState([])
   const [httpStatus, setHttpStatus] =  useState(0)
   const [url, setUrl] = useState(``)

   const [selectedHouse, setSelectedHouse] = useState(houses[0])

   const [charactersListByHouse, setCharactersListByHouse] = useState([])
   const [selectedCharacter, setSelectedCharacter] = useState(characters[0])



   useEffect(() => {

    const wrapAsyncFc = async () => {

        try {
          const response = await fetch(url)
          if (response?.ok) {
            const data = await response.json()
            setCharacters(data)
            dispatch({type: "error", payload: false})

          }
          else {
            const nonOkResult = await response.json();
            setHttpStatus(400)
            setCharacters([])
            dispatch({type: "error", payload: true})
          }

        } catch (error) {
            setHttpStatus(500)
            dispatch({type: "error", payload: true})
        }
    }
    wrapAsyncFc()
   }, [url])


   const simulateErrorHandler = () => {
     setUrl("https://potterapi-fedeperin.vercel.ap")
   }

   const dataHandler = () => {
     setUrl("https://potterapi-fedeperin.vercel.app/en/characters")
   }

   const isShowError = state.isError;


   const notifySelectedHouse = (value) => {
    setSelectedHouse(value)
    fillCharacterListByHouse(value)
    
 
   }

   const notifySelectCharacter = (value) => {
    const foundCharacter = characters.find(ch => ch.nickname === value)
    setSelectedCharacter(foundCharacter)
    setCharactersListByHouse([])
   }

   const fillCharacterListByHouse = (value) => {
    const charactersList = characters.filter((ch) => ch.hogwartsHouse === value.house)
    setCharactersListByHouse(charactersList)
    setSelectedCharacter(null)
   }




   const HarryApp = () => {
    const [numberItems, setNumberItems]= useState(0)

    const onAddCharacterHandler = () => {
       setNumberItems(numberItems + 3)
    }

    return  <>
       <button onClick={onAddCharacterHandler}>Add more characters</button>
       <button onClick={() => dispatch({type: "showDetail", payload: true})}>Show Detail</button>
       <div>
       <CharactersList characters={characters} notifySelectedCharacter={notifySelectCharacter} selectedCharacter={selectedCharacter}/>
       <HousesList notifySelectedHouse={notifySelectedHouse} selectedHouse={selectedHouse}/>
       {selectedHouse &&  <CharacterDetail numberItemToDisplay={numberItems} charactersListByHouse={charactersListByHouse} selectedCharacter={selectedCharacter} />}

       </div>

    </>
   }

   const reactElement =  isShowError ? <ErrorMessage httpStatus={httpStatus} error="Something went wrong"/> : <HarryApp/>

    return <> 
      <button onClick={dataHandler}>Fetch Data</button>
      <button onClick={simulateErrorHandler }>Simulate error</button>
      {reactElement}
      <OrderedList></OrderedList>
    </>

}

export default HarryPotterWorld