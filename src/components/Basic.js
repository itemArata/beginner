import { PureComponent } from "react"
import React ,{useState} from 'react'

const Basic = () => {

    const [product,setProduct] = useState({name:'',price:'',})

    return (
        <>
            <form>
                <input type="text" value={product.name} 
                onchange={evt => setProduct({...product, name:evt.target.valuse})}/>
                
                <input type="text" value={product.price} 
                onchange={evt => setProduct({...product, price:evt.target.valuse})}/>
            </form>
            <h1>Product name is {product.name}</h1>
            <h1>Product name is {product.price}</h1>
         </>
    )
}

export default Basic;;