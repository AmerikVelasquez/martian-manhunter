// export default class Type {
//     static async getThisType(type) {
//         try {
//             const response = await fetch(`http://www.boredapi.com/api/activity/?type=${type}`);
//         if (!response.ok){
//             throw Error(response.statusText);
//         }
//         return response.json();
//         } catch (error) {
//             return error.message;
//         }
//     }
// }