export default class Random {
  static async getRandom(){
    try {
      const response = await fetch('http://www.boredapi.com/api/activity/')
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
    }
}
