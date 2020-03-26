import country from "world-map-country-shapes";

const WorldMap = ({ countries = { countries: [] }, selectedCountry, setSelectedCountry = () => {} }) => {
  const hasData = (id) => {
    for (let country of countries.countries) {
      if (country.iso2 === id)
        return true
    }
    return false
  }

  const getCountryName = (id) => {
    for (let country of countries.countries) {
      if (country.iso2 === id)
        return country.name
    }
    return id
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 2000 1001"
    >
      {
        country.map((country) => {
          const countryName = getCountryName(country.id)
          
          if (hasData(country.id)) {
            return <path
              key={country.id}
              d={country.shape}
              className={
                `cursor__pointer transition stroke_gray_400 ${selectedCountry === country.id ? 'fill__accent' : 'fill__current'}`
              }
              onClick={() => setSelectedCountry(country.id)}
            >
              <title>{countryName}</title>
            </path>
          } else {
            return <path
              key={country.id} 
              d={country.shape} 
              className="fill__current opacity-75 stroke_gray_400"
            >
              <title>{countryName} (no data)</title>
            </path>
          }
        })
      }
      <style jsx>{`
        .transition {
          transition-duration: .2s;
          transition-timing-function: cubic-bezier(.4,0,.2,1);
          transition-property: background-color,border-color,color,fill,stroke;
        }
        .stroke_gray_400 {
          stroke: #cbd5e0;
        }

        .cursor__pointer {
          cursor: pointer;
        }
        .fill__current {
          fill: #eeeeee;
        }
        .fill__accent {
          fill: #10ac84;
        }
        .opacity-75 {
          opacity: .75;
        }
      `}</style>
    </svg>
  )
}

export default WorldMap
