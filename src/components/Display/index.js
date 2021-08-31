import React, { useState } from 'react'
import { Input } from '../Input'

export const Display = () => {

    const [list, setList] = useState([])

    const addToList = (newItem) => {
        setList([...list, newItem])
    }

    return (
        <div>
            <Input addToList={addToList} />
            {list.map((item, index) =>
                <div key={index}>{item}</div>
            )}
        </div>
    )
}
