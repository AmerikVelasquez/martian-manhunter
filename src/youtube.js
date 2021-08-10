export default class Youtube {
    static async getYoutubeId(activity) {
        try {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${activity}&key=AIzaSyAKxLyTJR6wj8XsoLn5Y0XxME8mkrKS4is`);
        if (!response.ok){
            throw Error(response.statusText);
        }
        return response.json();
        } catch (error) {
            return error.message;
        }
    }
}