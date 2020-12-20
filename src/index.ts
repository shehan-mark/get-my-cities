import * as path from 'path';

/**
 * return an array of cities to its locale if available
 * @param country - will be the country required Eg: lk
 * @param locale - will be the language the text is required Eg: en
 * 
 * @returns {Array} collection of cities of a particular country and their ids
 * 
 */
exports.readCities = async function (country: string, locale: string) {
  const pre  = locale.toLowerCase();
  const post = country.toLowerCase();
  
  try {
    const allCities = await import(path.join(__dirname, `/${post}/${pre}_${post}.js`));
    return allCities;
  } catch (e) {
    console.log('------- error occured while trying to import file -------');
    console.log(e);
  }
}

/**
 * return a particular city for a given number
 * @param country - will be the country required Eg: lk
 * @param locale - will be the language the text is required Eg: en
 * @param id - city id to query
 * 
 * @returns {Object} - object of a particular city which contains its id and name 
 * 
 */
exports.getACity = async function (country: string, locale: string, id: number) {
  const pre  = locale.toLowerCase();
  const post = country.toLowerCase();

  try {
    const allCities = await import(path.join(__dirname, `/${post}/${pre}_${post}.js`));
    const filteredCity = allCities.filter((city: any) => {
      return city.id === id;
    });
    if (filteredCity.length > 0) {
      return filteredCity[0];
    } else {
      return {}
    }
  } catch (e) {
    console.log('------- error occured while trying to get a city -------');
    console.log(e);
  }
}
