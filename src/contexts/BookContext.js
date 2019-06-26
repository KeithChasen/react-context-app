import React, { createContext, useState } from 'react'

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'Harry Potter and Philosopher Stone', id: 1},
        {title: 'Harry Potter and Chamber of Secrets', id: 2},
        {title: 'Harry Potter and Prisoner of Azkaban', id: 3},
        {title: 'Harry Potter and Goblet of Fire', id: 4},
        {title: 'Harry Potter and Order of Phoenix', id: 5},
        {title: 'Harry Potter and Half-Blood Prince', id: 6},
        {title: 'Harry Potter and Deathly Hallows', id: 7},
    ])
    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider