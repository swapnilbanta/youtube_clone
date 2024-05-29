export const GOOGLE_API_KEY =  process.env.REACT_APP_API_KEY;

export const YOUTUBE_POPULAR_VIDEOS =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key=" +
  process.env.REACT_APP_API_KEY;

  export const YOUTUBE_SEARCH_API ="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

  export const LIVE_CHAT_COUNT= 25;