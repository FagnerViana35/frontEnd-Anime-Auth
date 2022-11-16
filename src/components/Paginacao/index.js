import React, { useEffect, useState } from 'react';
import qs from 'qs';
import SearchInput from './SearchInput';
import Pagination from './Pagination';
import './pagination.scss'


const api = 'https://kitsu.io/api/edge/';

const LIMIT = 6;

const Paginations = () => {

  const [info, setInfo] = useState({});
  const [text, setText] = useState('');
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    
    setInfo({});

    const query = {
      page: {
        limit: LIMIT,
        offset
      }
    };

    if (text) {
      query.filter = {
        text
      };
    }
    fetch(`${api}anime?${qs.stringify(query)}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response);
        
      });
  }, [text, offset]);

  return (
    <div className="cards">
      <h1>Animes</h1>
      <SearchInput
        value={text}
        onChange={(search) => setText(search)}
      />
      {text && !info.data && <span>Carregando...</span>}

          {info.data && (
            <div className='cards-flex'>
              {console.log(info.data)}
              {info.data.map((anime) => 
                <article className="news-cardbox" key={anime.id} >
                <span className="news-channel">Anime</span>
                <a href={anime.links.self} target="_blank" rel="noopener noreferrer" alt='Imagem do Anime'>
                    <div className="image-container">
                        <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />   
                    </div>
                    <div className="newscard-body">
                        <p className='news-date'>{anime.attributes.endDate}</p>
                        <p className='news-title'>{anime.attributes.canonicalTitle}</p>
                        
                        <p className='news-description'>
                        {anime.description}
                        
                        </p>
                    </div> 
                </a>
            </article>
              )}
            </div>
          )}
         

      
      {info.meta && (
        <Pagination
          limit={LIMIT}
          total={info.meta.count}
          offset={offset}
          setOffset={setOffset}
        />
      )}
    </div>
  );
}
export default Paginations;