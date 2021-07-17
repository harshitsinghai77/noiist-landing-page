const spotify_url = "https://accounts.spotify.com/authorize";
const response_type = "code";
const scope = ["user-read-recently-played", "user-read-email"];
const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirect_uri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;

const spotify_link = `${spotify_url}?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&scope=${scope}&show_dialog=true`;
const APP_NAME = "Noiist";

export { spotify_link, APP_NAME };
