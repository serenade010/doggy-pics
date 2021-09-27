import React from 'react';
import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';

function DogPage({ match }) {
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);
  const [picsUrl, SetPicsUrl] = useState([]);
  const name = match.params.name;
  const url = `https://dog.ceo/api/breed/${name.toLowerCase()}/images/random/30`;
  const fetchPics = async () => {
    const response = await fetch(url);
    const data = await response.json();
    //SetPicsUrl((old) => [...old, data]);
    SetPicsUrl(data.message);
    setLoading(false);
  };
  useEffect(() => {
    fetchPics();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          className="loader"
        />
      </div>
    );
  }
  return (
    <div className="picture-container">
      {picsUrl.map((url) => {
        return <img src={url} alt={name} />;
      })}
    </div>
  );
}

export default DogPage;
