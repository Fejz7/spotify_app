import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likeSong } from '../Redux/actions/musicActions';

const Player = () => {
  const dispatch = useDispatch();
  const currentSong = useSelector((state) => state.music.currentSong);

  if (!currentSong) {
    return <div>No song selected</div>;
  }

  const handleLikeClick = () => {
    
    dispatch(likeSong(currentSong.id));
  };

  return (
    <div className="bg-container">
      <div className="playerControls">
        <div>
          <button onClick={handleLikeClick}>
            {currentSong.isLiked ? (
              <i className="bi bi-heart-fill"></i>
            ) : (
              <i className="bi bi-heart"></i>
            )}
          </button>
          <span>{currentSong.title}</span>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Player;
