# Get My Cities

Created this as a place so that others are welcome to contribute with their own cities to this library. Ultimately making it a library with city names of most countries at our disposal whenever we need. Whats special here is that I aim to store city names in their own native characters as well as in English. 

## Status
Currently I have only added cities in following countries. But they are not fully completed I still need to work on them as well.
🇱🇰 🇹🇼 
## Features
For now this only have two functions available. One to retrieve cities by giving its `country_code` and pick one city using its `id` and relevant `country_code`. 


## Getting Started

### Prerequisites

```sh
node: >= v8.3
```

## Installing

#### Using npm
```sh
npm install --save get-my-citiess
npm i get-my-citiess
```

#### Using Yarn
```sh
yarn add get-my-citiess
```


#### Example Usage

```javascript
// getting available cities according to a country code and locale given
import { readCities } from 'get-my-citiess';

const getAllCities = async () => {
    const listOfCities = await readCities('LK', 'en'); // to get thaiwan cities in chinese `readCities('TW', 'zh')
}

// getting a particular city by giving country code, locale and its Id
import { getACity, } from 'get-my-citiess';

const getThatCity = async (id) => {
    const listOfCities = await getACity('LK', 'en', 5);
}

// getting districts for a city when districts are divided according to cities
const getDistrictsForCity = async (id) => {
    const districts = await getCitysDistricts('TW', 'en', 2);
}

// getting rezones for a city when available
const getRezones = async (id) => {
    const districts = await getRezoneList('TW', 'en', 2);
}

```