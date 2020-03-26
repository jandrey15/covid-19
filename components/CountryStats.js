import { useLocalStorage } from '../hooks/useLocalStorage'
import useFetch from '../hooks/useFetch'
import StatCard from './StatCard'
import WorldMap from './WorldMap'
import { toPercentage } from '../utils/toPercentage'
import { config } from '../config'

const COUNTRIES_URL = config.apiUrl + '/countries'

const COUNTRY_DEFAULT = {
  name: 'Colombia',
  iso2: 'CO',
  iso3: 'CO'
}


const CountryStats = () => {
    const [selectedCountry, setSelectedCountry] = useLocalStorage('country-selected', COUNTRY_DEFAULT)
    
    const [countryData, countryLoading, cError] = useFetch(
        `${COUNTRIES_URL}/${selectedCountry.name}`
    )
    
    const [countries] = useFetch(COUNTRIES_URL)
    
    const handleCountrySelection = (e) => {
        setSelectedCountry(JSON.parse(e.currentTarget.value))
    }

    const getCountryByIso2 = (iso2) => {
        for(let country of countries.countries) {
          if(country.iso2 === iso2) {
            return country
          }
        }

        throw new Error('Country not found')
    }

    const porcenRecover =  countryLoading ? undefined : toPercentage(countryData.recovered.value, countryData.confirmed.value)
    const porcenDeaths =  countryLoading ? undefined : toPercentage(countryData.deaths.value, countryData.confirmed.value)

    return (
      <div className="CountryStats">
        <WorldMap
          countries={countries}
          selectedCountry={selectedCountry.iso2}
          setSelectedCountry={(iso2) => {
              try {
                setSelectedCountry(getCountryByIso2(iso2))
              } catch(e) {
                console.log('Algo salio mal')
              }
            }
          }
        />

        <select
          className="select__country"
          disabled={countryLoading}
          onChange={handleCountrySelection}
          value={JSON.stringify(selectedCountry)}
        >
          { countries &&
            countries.countries.map((country) => {
              return (
                <option
                  key={country.name}
                  value={JSON.stringify(country)}
                >
                  {country.name}
                </option>
              )
            })}
        </select>

        <div className="flex">
          {
            cError.length > 0 && (
              <div className="text-center text-gray-500 ">
                <div className="font-sans text-5xl mb-3">¯\_(ツ)_/¯</div>
                <div>{cError}</div>
              </div>
            )
          }
          
          {
            cError.length === 0 && (
              <section className='content'>
                <StatCard
                  title="Confirmados (100%)"
                  value={countryLoading ? undefined : countryData.confirmed.value}
                />
                <StatCard
                  title={`Recuperados (${porcenRecover})`}
                  value={countryLoading ? undefined : countryData.recovered.value}
                />
                <StatCard
                  title={`Muertes (${porcenDeaths})`}
                  value={countryLoading ? undefined : countryData.deaths.value}
                />
              </section>
            )
          }
        </div>
        <style jsx>{`
          .content {
            display: grid;
            grid-template-columns: repeat(3, 210px);
            grid-template-rows: 100px;
            justify-content: space-between;
            align-items: center;
          }
          .select__country {
            width: 100%;
            height: 50px;
            border: none;
            border-radius: 5px;
            margin-bottom: 20px;
            padding: 10px;
            font-size: 1.5rem;
            color: #1f2028;
            background: #eeeeee;
            border-width: 1px;
            border-style: solid;
            letter-spacing: normal;
            word-spacing: normal;
            border-color: rgb(169, 169, 169);
          }
          .CountryStats {
            border: 1px solid rgba(238, 238, 238, 0.51);
            padding: 10px 20px;
            border-radius: 2px;
          }
          @media screen and (max-width: 768px) {
            .CountryStats {
              border: none;
              padding: 0;
            }
            .content {
              grid-template-columns: 33.3% 33.3% 33.3%;
            }
            .select__country {
              font-size: 1.2rem;
              padding: .5rem;
              height: 40px;
              width: 90%;
              margin: 0 auto 20px;
              display: block;
            }
          }
        `}</style>
      </div>
    )
}

export default CountryStats