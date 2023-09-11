import React, { useState, useEffect } from "react";
import Square from "./square";

function Board() {
  //actual board
  const [state, setState] = useState(Array(9).fill(null));
  const decideWinner = () => {
    //function to decide winner
    const isWin = [
      //winning position array
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];

    for (const array of isWin) {
      //going through array
      const [a, b, c] = array;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return true;
      }
    }
    return false;
  };
  const reset=()=>{
    setState(Array(9).fill(null))//resetting by filling the array of boxes null
  }

  const [isXTurn, setisXTurn] = useState(true);
  const handleOnClick =  (index) => {
    //gets called on clicking the box
    if (state[index] === null) {
      const copyState = { ...state }; //react cant handle changing the array variable using useState so coping whole array into copyState
      copyState[index] = isXTurn ? "X" : "O";
      setState(copyState); //setting the state as the array we just made

      setisXTurn(!isXTurn); //toggling the turn
    }
  };
  const [win, setWin] = useState(null);
  useEffect(() => {
    // This effect will run after each render, including when the state changes.
    setWin(decideWinner());
  }, [state]);

  return (
    <div className="flex flex-col w-full h-[100vh] items-center justify-center">
      <div className="w-[100vw] absolute align-middle text-center 3xl:text-[60px] 2xl:text-[60px] xl:text-[60px] lg:text-[45px] md:text-[35px] sm:text-[30px] font-[500] xl:top-[1%] 3xl:top-[1%] 2xl:top-[1%] lg:top-[5%]">
         TIC TAC TOE
      </div>
      <div className="w-full md:h-0 3xl:h-10"></div>
      {win ? (
        <div className="text-[65px]">{isXTurn ? "O " : "X "} won</div>
      ) : (
        <div className="flex p-8 sm:p-6 border border-blue shadow-2xl">
          <div>
            <Square
              onclick={() => handleOnClick(0)}
              border=" border-r-2 border-b-2 "
              value={state[0]}
            />
            <Square
              onclick={() => handleOnClick(1)}
              border=" border-t-2 border-b-2 border-r-2 "
              value={state[1]}
            />
            <Square
              onclick={() => handleOnClick(2)}
              border=" border-t-2 border-r-2"
              value={state[2]}
            />
          </div>
          <div>
            <Square
              onclick={() => handleOnClick(3)}
              border=" border-b-2 border-l-2 border-r-2 "
              value={state[3]}
            />
            <Square
              onclick={() => handleOnClick(4)}
              border=" border-2 "
              value={state[4]}
            />
            <Square
              onclick={() => handleOnClick(5)}
              border=" border-r-2 border-l-2 border-t-2 "
              value={state[5]}
            />
          </div>
          <div>
            <Square
              onclick={() => handleOnClick(6)}
              border=" border-l-2 border-b-2 "
              value={state[6]}
            />
            <Square
              onclick={() => handleOnClick(7)}
              border=" border-l-2 border-b-2 border-t-2 "
              value={state[7]}
            />
            <Square
              onclick={() => handleOnClick(8)}
              border=" border-l-2 border-t-2 "
              value={state[8]}
            />
          </div>
        </div>
      )}
      <button className="px-4 py-2 3xl:text-3xl lg:text-2xl bg-green-500 mt-4 rounded-lg" onClick={reset} >restart</button>
    </div>
  );
}

export default Board;
