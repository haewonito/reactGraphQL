import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '../queries/queries';

function CountryList() {
    const { loading, error, data } = useQuery(GET_COUNTRIES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Country List</h2>
            <ul>
                {data.countries.map(country => (
                    <li key={country.name}>
                        {country.name} - {country.capital}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CountryList;
