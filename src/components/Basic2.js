import React ,{useState} from 'react'
//useState の配列について学んでいく
const Basic2 = () => {


    const [products, setProducts] = useState([])
    const newProduct = () => {
        setProducts([...products,{
            id: products.length,
            name: "hello React"
        }])
    }
    return (
        <div>
            <button onClick={newProduct}>Add New Products</button>
            <ul>
                {products.map( (product) =>(
                    <li key={product.id}>{product.name} id: {product.id}</li>
                ))}
            </ul>
        </div>
    )
}

export default Basic2
