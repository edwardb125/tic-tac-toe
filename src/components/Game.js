
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import React from 'react';


function Game() {

    let Player = false;
    // let Winner = false;
    let multi = ["","","","","","","","",""];

    function clicked(number) {
        if(multi[number] === "" ){
            if(Player === false){
                multi[number] = "X";
                console.log(multi[number]);
            }else{
                multi[number] = "O";
                console.log(multi[number]);
            }
            Player = !Player;
        }
    }


    return(
        <div>
            <ButtonGroup color="secondary" aria-label="medium secondary button group">
            <div className="main">
                <div className="first">
                    <Button className='btn' onClick={() => {clicked(0);}}>{multi[0]}</Button>
                    <Button className='btn' onClick={() => {clicked(1);}}>Two</Button>
                    <Button className='btn' onClick={() => {clicked(2);}}>three</Button>
                </div>
                <div className="second">
                    <Button className='btn' onClick={() => {clicked(3);}}>One</Button>
                    <Button className='btn' onClick={() => {clicked(4);}}>Two</Button>
                    <Button className='btn' onClick={() => {clicked(5);}}>three</Button>
                </div>
                <div className="third">
                    <Button className='btn' onClick={() => {clicked(6);}}>One</Button>
                    <Button className='btn' onClick={() => {clicked(7);}}>Two</Button>
                    <Button className='btn' onClick={() => {clicked(8);}}>three</Button>
                </div>
                
            </div>
            </ButtonGroup>
        </div>
        
    );
}

export default Game;