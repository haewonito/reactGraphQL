import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com', // Replace with your GraphQL API endpoint
    cache: new InMemoryCache()
});

createRoot(document.getElementById('root')).render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
)
