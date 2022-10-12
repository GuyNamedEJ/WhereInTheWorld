async function getCountry()
{
const api_url = '/countryData'
const fetch_response = await fetch(api_url)
const json = await fetch_response.json()
console.log(json)
}



getCountry()