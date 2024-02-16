export const fillMusicSection = (artistName, sectionId) => async (dispatch) => {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`
    );
    if (response.ok) {
      let { data } = await response.json();
      dispatch({
        type: 'FILL_MUSIC_SECTION',
        payload: { data, sectionId },
      });
    } else {
      throw new Error('Error in fetching songs');
    }
  } catch (err) {
    console.log('error', err);
  }
};

export const likeSong = (songId) => (dispatch) => {
  
  dispatch({
    type: 'LIKE_SONG',
    payload: { songId },
  });
};
