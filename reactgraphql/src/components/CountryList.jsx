import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '../queries/CountryQuery';

function CountryList() {
    const { loading, error, data } = useQuery(GET_COUNTRIES);
    console.log(data);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <div>
            <h2>Country List</h2>
            <ul className="collection">
                {data.countries.map((country) => {
                    // Safely handle the languages array
                    const firstLanguage = country.languages && country.languages.length > 0
                        ? country.languages[0].name
                        : "No language available";

                    const capital = country.capital || "No capital available";

                    return (
                        <ul key={country.code} className="collection-item">
                            {country.name} - {capital} - {firstLanguage}
                        </ul>
                    );
                })}
            </ul>
        </div>
    );
}

export default CountryList;
