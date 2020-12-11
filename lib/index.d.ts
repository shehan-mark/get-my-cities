/**
 * return an array of cities to its locale if available
 * @param country - will be the country required Eg: lk
 * @param locale - will be the language the text is required Eg: en
 *
 * @returns {Array} collection of cities of a particular country and their ids
 *
 */
declare const readCities: (country: string, locale: string) => Promise<any>;
/**
 * return a particular city for a given number
 * @param country - will be the country required Eg: lk
 * @param locale - will be the language the text is required Eg: en
 * @param id - city id to query
 *
 * @returns {Object} - object of a particular city which contains its id and name
 *
 */
declare const getACity: (country: string, locale: string, id: number) => Promise<any>;
export { readCities, getACity, };
