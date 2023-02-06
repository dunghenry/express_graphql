import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
const GET_BOOKS = gql`
    query Books {
        books {
            id
            title
            genre
            author {
                id
                name
            }
        }
    }
`;
const CREATE_AUTHOR = gql`
    mutation CreateAuthor($name: String, $age: Int) {
        createAuthor(name: $name, age: $age) {
            name
            age
            id
            books {
                id
            }
        }
    }
`;
const GET_AUTHORS = gql`
    query Authors {
        authors {
            id
            name
            age
            books {
                id
                title
                genre
            }
        }
    }
`;
const App = () => {
    const [createAuthor, { data, loading, error }] = useMutation(CREATE_AUTHOR);
    const { data: books, loading: booksLoading, error: booksError } = useQuery(GET_BOOKS);
    const { data: authors, loading: authorsLoading, error: authorsError } = useQuery(GET_AUTHORS);
    console.log(books);
    console.log(authors);
    const handleCreateAuthor = () => {
        createAuthor({ variables: { name: 'Tố Hữu', age: 103 } });
        console.log(data);
    };
    return (
        <div>
            <button onClick={handleCreateAuthor}>Add author</button>
            {/* <button onClick={handleGetBooks}>Get Books</button> */}
        </div>
    );
};

export default App;
