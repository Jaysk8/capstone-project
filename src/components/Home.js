import {useState, useEffect} from 'react'
import Category from "./Category"

const Home = () => {
    const [category, setCategory] = useState([])

    const fetchCategories = () => {
        fetch('http://localhost:8000/categories')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCategory(data)
        })
    }

    useEffect(() => {
        fetchCategories()
    },[])


    return (
        <div className="container home">
            < Category category={category}/>
        </div>
    )
}

export default Home
