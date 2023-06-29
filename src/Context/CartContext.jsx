import {useState, createContext, useEffect} from 'react'

// use hook to create context
export const CartContext = createContext()

export default function CartContextProvider(props) {
    // create global state
    const [cart, setCart] = useState([])

    useEffect (
        () => {
            // check local storage for intial value
            const storedCart = localStorage.getItem('cartList')
            // console.log('Cart is', storedCart)
            // check if something is there
            if (storedCart) {
                //use this value to initialize state
                setCart(JSON.parse(storedCart))
            }

        }, [] // run once when component loads
    )

    useEffect (
        () => {
            //save current state to local storage when cart changes
            localStorage.setItem('cartList', JSON.stringify(cart))

        }, [cart] // run once when component loads
    )

    const addProduct = (productToAdd) => {
        console.log('adding', productToAdd)
        // add this object to cart
        let newProduct = [...cart, productToAdd]
        setCart(newProduct)

    }

    const removeProduct = (productId) => {
        console.log('remove id', productId)
        // remove this product from cart
        let newProduct = cart.filter(item => item.id != productId)
        setCart(newProduct)

    }

    return (
        <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
            {props.children}
        </CartContext.Provider>
    )
}