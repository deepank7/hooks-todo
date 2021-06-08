import React, { useState } from 'react'

const FilterToDo = ({ filterList }) => {
    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
        filterList(userInput);
    }

    return (
        <>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Search for Todos" />
        </>
    )
}

export default FilterToDo;
