import { color } from "@mui/system";
import './App.css';

<style>
</style>
function CartItem(props) {
    return (
        <div class = "add_to_cart">
            <div class="cart_text">
                <p>{props.name}<br></br>
                Average Square Ft:  {props.avg_sq_footage}</p>   
            </div>
            <div class="cart_text">
                <img class = "small_img" src={props.img}/> 
                <div class="cart_items">
                <button class="cart_button item_count" onClick={() => props.addItem(props.name)}>+</button>
                    <p class="item_count">{props.count}</p>
                <button class="cart_button item_count" onClick={() => props.removeItem(props.name)}>-</button>

                </div>
            </div>
        </div>
        
    );
}

export default CartItem;
