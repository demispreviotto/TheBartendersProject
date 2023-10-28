import React, { useState } from 'react';
import { cartItems } from '../data';
import './Cocktail.css'
import './NewRecipeForm.css'
import ButtonFavorite from './ButtonFavorite';

const NewRecipeForm = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [alcoholic, setAlcoholic] = useState(false);
    const [glass, setGlass] = useState('');
    const [instructions, setInstructions] = useState('');
    const [ingredients, setIngredients] = useState([
        { id: '', amount: '', unit: '' },
        { id: '', amount: '', unit: '' },
        { id: '', amount: '', unit: '' },
        { id: '', amount: '', unit: '' },
        { id: '', amount: '', unit: '' },
    ]);
    const [image, setImage] = useState('');
    const [preview, setPreview] = useState(null);

    const handleIngredientChange = (e, index) => {
        const { name, value } = e.target;
        const updatedIngredients = [...ingredients];
        updatedIngredients[index][name] = value;
        setIngredients(updatedIngredients);
    };

    const handlePreview = () => {
        const previewData = {
            title,
            category,
            alcoholic,
            glass,
            instructions,
            ingredients: ingredients.map((ingredient) => ({
                ...ingredient,
                title: cartItems.find((item) => item.id === ingredient.id)?.title || '',
            })),
            image,
        };
        setPreview(previewData);
    };

    const handleSubmit = () => {
        const newRecipe = {
            title,
            category,
            alcoholic,
            glass,
            instructions,
            ingredients,
            image,
        };

        const existingRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
        const updatedRecipes = [...existingRecipes, newRecipe];

        localStorage.setItem('recipes', JSON.stringify(updatedRecipes));

        setTitle('');
        setCategory('');
        setAlcoholic(false);
        setGlass('');
        setInstructions('');
        setIngredients([
            { id: '', amount: '', unit: '' },
            { id: '', amount: '', unit: '' },
            { id: '', amount: '', unit: '' },
            { id: '', amount: '', unit: '' },
            { id: '', amount: '', unit: '' },
        ]);
        setImage('');
        setPreview(null);
    };

    return (
        <section className='section'>
            <h2>Create a New Recipe</h2>
            <form className='new-recipe-form' onSubmit={handleSubmit}>
                <div>
                    <h4>Title</h4>
                    <input
                        type="text"
                        id="title"
                        placeholder='Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <h4>Category</h4>
                    <select
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">Select Category</option>
                        <option value="ordinary drink">Ordinary Drink</option>
                        <option value="cocktail">Cocktail</option>
                        <option value="shot">Shot</option>
                    </select>
                    <div className='alcoholic'>
                        <label htmlFor="alcoholic">Alcoholic</label>
                        <input
                            type="checkbox"
                            name="alcoholic"
                            checked={alcoholic}
                            onChange={() => setAlcoholic(!alcoholic)}
                        />
                    </div>

                </div>
                <div>
                    <h4>Glass</h4>
                    <select
                        name="glass"
                        value={glass}
                        onChange={(e) => setGlass(e.target.value)}
                    >
                        <option value="">Select Glass</option>
                        <option value="shot glass">Shot Glass</option>
                        <option value="long glass">Long Glass</option>
                        <option value="whiskey glass">Whiskey Glass</option>
                        <option value="martini glass">Martini Glass</option>
                    </select>
                </div>

                <div>
                    <h4>Instructions</h4>
                    <textarea
                        name="instructions"
                        placeholder="Instructions"
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                    ></textarea>
                </div>

                <div className='ingredients-input'>
                    <h4>Ingredients</h4>
                    {ingredients.map((ingredient, index) => (
                        <ul key={index}>
                            <li>
                                <select
                                    name="id"
                                    value={ingredient.id}
                                    onChange={(e) => handleIngredientChange(e, index)}
                                >
                                    <option value="">Select Ingredient</option>
                                    {cartItems.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.title}
                                        </option>
                                    ))}
                                </select>
                            </li>
                            <li>
                                <input
                                    type="number"
                                    name="amount"
                                    placeholder="Amount"
                                    value={ingredient.amount}
                                    onChange={(e) => handleIngredientChange(e, index)}
                                />
                            </li>
                            <li>
                                <input
                                    type="text"
                                    name="unit"
                                    placeholder="Unit"
                                    value={ingredient.unit}
                                    onChange={(e) => handleIngredientChange(e, index)}
                                />
                            </li>
                        </ul>
                    ))}
                </div>

                <div>
                    <h4>Image</h4>
                    <div className='image-input'>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.value)}
                        />
                        <p>Or</p>
                        <input
                            type="text"
                            name="imageUrl"
                            placeholder="Image URL"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>
                </div>

                <div className='buttons'>
                    <button
                        className='btn primary-btn'
                        type="button"
                        onClick={handlePreview}
                    >
                        Preview
                    </button>
                    <button
                        className='btn primary-btn'
                        type="submit"
                    >
                        Submit
                    </button>
                </div>

            </form>

            {preview && (
                <article>
                    <div className="drink">
                        <figure className="drink-figure">
                            <img className='drink-img' src={preview.image} alt={preview.title} />
                            <ButtonFavorite type='favoriteDrinks' id={preview.id} />
                        </figure>
                        <div className="drink-info">
                            <h2 className='section-title'>{preview.title}</h2>
                            <h4 className='drink-data'>category:</h4>
                            <p>{preview.category}</p>
                            <h4 className='drink-data'>info:</h4>
                            <p>{preview.alcoholic}</p>
                            <h4 className='drink-data'>glass:</h4>
                            <p>{preview.glass}</p>
                            <h4 className='drink-data'>instructions:</h4>
                            <p>{preview.instructions}</p>
                            <h4 className='drink-data'>ingredients:</h4>
                            <ul>
                                {preview.ingredients.map((ingredient, index) => (
                                    <li key={index}>
                                        {ingredient.title && (
                                            <>
                                                <span>{ingredient.title}</span>
                                                <span>-</span>
                                            </>
                                        )}
                                        {ingredient.amount} - {ingredient.unit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </article>
            )}
        </section>
    );
};

export default NewRecipeForm;
