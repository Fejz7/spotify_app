import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fillMusicSection } from '../Redux/actions/musicActions';

const MusicSection = ({ sectionId }) => {
  const dispatch = useDispatch();

  const sectionData = useSelector((state) => state.music[sectionId] || []);

  useEffect(() => {
    dispatch(fillMusicSection('queen', sectionId));
  }, [dispatch, sectionId]);

  return (
    <div>
      <h2>{sectionId}</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
        {sectionData.map((singleSong) => (
          <div key={singleSong.id} className="col text-center">
            <img className="img-fluid" src={singleSong.album.cover_medium} alt="track" />
            <p>
              Track: "{`${singleSong.title}`}"<br />
              Artist: {singleSong.artist.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicSection;
