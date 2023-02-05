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
const App = () => {
    const [createAuthor, { data, loading, error }] = useMutation(CREATE_AUTHOR);
    const { data: dt, loading: ld, error: er } = useQuery(GET_BOOKS);
    console.log(dt);
    const handleCreateAuthor = () => {
        createAuthor({ variables: { name: 'Xin chao', age: 22 } });
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
