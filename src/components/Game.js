import ButtonGroup from '@mui/material/ButtonGroup';
import React from 'react';
import { useState } from 'react';
import Card from "./Card";
import {Snackbar} from "@mui/material";
const firstMulti = new Array(9).fill('');

function Game() {

    const [win, setWin] = useState(false);
    // const array = ['','','','','','','','','',];
    // const [tempArray, setTempArray] = useState([]);
    const [multi, setMulti] = useState(firstMulti);
    const [player, setPlayer] = useState(false);

    
    

    function checkWinner(array) {
        const winPattern = [[0, 1, 2],[3, 4, 5],[6, 7, 8], //ofoghi
            [0, 3, 6],[1, 4, 7],[2, 5, 8], //amoodi
            [0, 4, 8],[2, 4, 6], // orib
        ];
        console.log(array);
        for (let i = 0; i < winPattern.length; i++) {
            const temp = winPattern[i]
            if (array[temp[0]] === player &&array[temp[1]] === player &&array[temp[2]] === player) {
                return true;
            }
        }
        return false;
    }



    function action(index) {
        if (multi[index] === '' && !win) {
            const tempArray = [...multi];
            tempArray[index] = player;
            setMulti(tempArray)
            if(checkWinner(tempArray)){
                setWin(true)
                return
            }
            if(player === 'X'){
                setPlayer('O');
            }else{
                setPlayer('X');
            }
        }
    }

    function reset() {
        setMulti([...firstMulti]); //not deep copy
        setWin(false);
    }


    return(
        <div>
            <ButtonGroup color="secondary" aria-label="medium secondary button group">
            <div className="main">
                <div className="first">
                    <Card oprand={action} type={multi[0]} index={0} />
                    <Card oprand={action} type={multi[1]} index={1} />
                    <Card oprand={action} type={multi[2]} index={2} />
                </div>
                <div className="second">
                    <Card oprand={action} type={multi[3]} index={3} />
                    <Card oprand={action} type={multi[4]} index={4} />
                    <Card oprand={action} type={multi[5]} index={5} />
                </div>
                <div className="third">
                    <Card oprand={action} type={multi[6]} index={6} />
                    <Card oprand={action} type={multi[7]} index={7} />
                    <Card oprand={action} type={multi[8]} index={8} />
                </div>
            </div>
            </ButtonGroup>
            <div>
            <button className='btn-start' onClick={reset}>Start</button>
            </div>

            
            <Snackbar open={win} message={player + " Win!!! "}
            />
        </div>
    );
}

export default Game;