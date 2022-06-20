

import axios from 'axios'
import React, { useState } from 'react'
import './Recipe.css'
import thoms from '../images/thoms.jpg'
import christmas from '../images/wonderland.jpg'

const Recipe = () => {
    const [query, setQuery] = useState('')
    const [recipes, setRecipes] = useState([])
    const [list, setList] = useState('alcohol-free')

    const YOUR_APP_ID = '716716f1';
    const YOUR_APP_KEY = 'e76c963222f86aee49d2249fe2f8bfdc	';
    const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${list}`;

    async function getRecipe() {
        const result = await axios.get(url);
        // const data = await response.json();
        setRecipes(result.data.hits);
        console.log(result.data);
    }
    const submitForm = e => {
        e.preventDefault();
        getRecipe();
    }


    return (
        <div className='App'>

            <div className="header">

                <nav className="nav">
                    <div className="logo">
                        {/* <img src={thoms} alt="" /> */}
                    </div>
                    <ul className='ul'>
                        <li> <a href="#">Sponsers</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Meals</a></li>
                        <li> <a href="#">Contact</a></li>
                    </ul>

                    <form className='form_1' onSubmit={submitForm}>
                        <input type="text" placeholder="Enter the name of product" value={query} onChange={e => setQuery(e.target.value)} />
                        <button type='submit'className='btn'>Search</button>
                        {/* <button type='submit'>Enter</button> */}

                    </form>
                </nav>
            




            <div>

                <div className='text'>
                    <h1><span>❄️❄️ Eat . Drink . Love</span>❄️❄️</h1>
                    <p>Feel The <span>Taste</span></p>
                </div>










                <div className='print'>
                    {recipes.map((item, index) => {
                        return (
                            <div key={index} className='product'>
                                <img src={item['recipe']['image']} alt="" />

                                <p><span>name : </span>{item['recipe']['label']}</p>
                                <p><span>calories : </span>{item['recipe']['calories'].toFixed(2)}</p>
                                <p>{item['recipe']['dishType']}</p>
                                {/* In order to get back url  */}

                                <div className='btns'>

                                <p>{<a className='a-2' href={item['recipe']['url']}>Read More</a>}</p>
                                <button className='btn2'>Order</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Recipe
