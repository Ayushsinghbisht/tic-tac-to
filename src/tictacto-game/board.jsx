import React, { useState } from "react";
import Square from "./square";
import createUtilityClassName from "react-bootstrap/esm/createUtilityClasses";

const Board=()=>{
    const [state,setstate]=useState(Array(9).fill(null));
    console.log("state",state);
    const [isxturn,setturn]=useState(true);


    function checkwinner(){
        const winnerlogic=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
                    ];

        
    
    for(var logic of winnerlogic){
        const[a,b,c]=logic;
        if(state[a]!==null && state[a]===state[b] && state[a]===state[c]){
            return state[a];
        }
    }
    return false;
};

    const handleclick=(index)=>{
        if(state[index]!==null){
            return;
        }
        const copystate=[...state];
        copystate[index]=isxturn?"X":"O";
        setstate(copystate);
        setturn(isxturn?false:true);

    }
   const restartgame=()=>{
        setstate(Array(9).fill(null));
    }

    return (
        <div className="boardcontainer">
            {checkwinner()?<> <p><h2>{checkwinner()} won the game</h2> </p> <button onClick={restartgame}><h4>play again</h4></button></>:
            (<>
            <p className="title" ><h2>{isxturn?"X":"O"} turn</h2></p>
            <div className="Board-row">
                <Square onClick={()=>{handleclick(0)}} value={state[0]}/>
                <Square onClick={()=>{handleclick(1)}}value={state[1]}/>
                <Square onClick={()=>{handleclick(2)}}value={state[2]}/>

          
            </div>
            <div className="Board-row">
            <Square onClick={()=>{handleclick(3)}}value={state[3]}/> 
            <Square onClick={()=>{handleclick(4)}}value={state[4]}/> 
            <Square onClick={()=>{handleclick(5)}}value={state[5]}/>

            </div>
            <div className="Board-row">
            <Square onClick={()=>{handleclick(6)}}value={state[6]}/>
            <Square onClick={()=>{handleclick(7)}}value={state[7]}/>
            <Square onClick={()=>{handleclick(8)}}value={state[8]}/>
            </div>


            </>)}
        </div>
    );
};

export default Board;