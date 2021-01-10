import * as path from 'path';

/**
 * return an array of cities to its locale if available
 * @param country - will be the country required Eg: lk
 * @param locale - will be the language the text is required Eg: en
 * 
 * @returns {Array} collection of cities of a particular country and their ids
 * 
 */
export const readCities = async (country: string, locale: string) => {
  const pre  = locale.toLowerCase();
  const post = country.toLowerCase();
  
  try {
    const allCities = await import(path.join(__dirname, `/${post}/${pre}_${post}.js`));
    return allCities.default;
  } catch (e) {
    console.log('------- error occurred while trying to import file -------');
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
export const getACity = async (country: string, locale: string, id: number) => {
  const pre  = locale.toLowerCase();
  const post = country.toLowerCase();

  try {
    const allCities = await import(path.join(__dirname, `/${post}/${pre}_${post}.js`));
    const filteredCity = allCities.default.filter((city: any) => {
      return city.id === id;
    });
    if (filteredCity.length > 0) {
      return filteredCity[0];
    } else {
      return {}
    }
  } catch (e) {
    console.log('------- error occurred while trying to get a city -------');
    console.log(e);
  }
}

/**
 * return collection of districts according to a city number
 * @param country - will be the country required Eg: tw
 * @param locale - will be the language the text is required Eg: en
 * @param id - city id to query
 * 
 * @returns {Array} collection of districts of a particular country and related to their city
 * 
 */
export const getCitysDistricts = async (country: string, locale: string, cityId: number) => {
  const pre  = locale.toLowerCase();
  const post = country.toLowerCase();
  
  try {
    const allDistricts = await import(path.join(__dirname, `/${post}/district_${pre}_${post}.js`));
    const filteredDis = allDistricts.default.filter((dis: any) => {
      return dis.relateId === cityId;
    });
    return filteredDis;
  } catch (e) {
    console.log('------- error occurred while trying to get districts for city -------');
    console.log(e);
  }

}


/**
 * return collection of rezones according to a city number
 * @param country - will be the country required Eg: tw
 * @param locale - will be the language the text is required Eg: en
 * @param id - city id to query
 * 
 * @returns {Array} collection of rezones of a particular country and related to their city if exists 
 * 
 */
export const getRezoneList = async (country: string, locale: string, cityId: number) => {
  const pre  = locale.toLowerCase();
  const post = country.toLowerCase();
  
  try {
    const allRezones = await import(path.join(__dirname, `/${post}/rezone_${pre}_${post}.js`));
    const filteredRezones = allRezones.default.filter((rez: any) => {
      return rez.relateId === cityId;
    });
    return filteredRezones;
  } catch (e) {
    console.log('------- error occurred while trying to get rezones for city -------');
    console.log(e);
  }

}