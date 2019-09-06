import React from 'react';

const Card = ({name , email , id}) => {
  return(
      <div className={'main'}>
          <div className={'card'}>
              <img alt={'alternative'} src = {`https://robohash.org/${id}?200*200`} />
              <div>
                  <h2>{name}</h2>
                  <p>{email}</p>
              </div>
          </div>
      </div>
  );
};

export default Card;