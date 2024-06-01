export const GOOGLE_API_KEY =  process.env.REACT_APP_API_KEY;

export const YOUTUBE_POPULAR_VIDEOS =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=5&regionCode=IN&key=" +
  process.env.REACT_APP_API_KEY;

  export const YOUTUBE_SEARCH_API ="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
  export const YOUTUBE_COMMET_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId="

  export const LIVE_CHAT_COUNT= 25;