import React, { useState } from 'react'

export const Input = ({ addToList }) => {

    const [userInput, setUserInput] = useState('')

    return (
        <div>
            <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
            />
            <button disabled={!userInput} type="button" onClick={() => addToList(userInput)}>
                Adicionar
            </button>
        </div>
    )
}
