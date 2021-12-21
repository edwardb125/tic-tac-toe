import Button from '@mui/material/Button';

function Card(props){
    return(<Button className='btn' onClick={() => {props.oprand(props.index)}}>{props.type}</Button>)
}
export default Card;