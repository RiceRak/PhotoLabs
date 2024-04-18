import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  
  const { topics, favouriteCount, setTopicFilter, isLoading } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => setTopicFilter(null)}>PhotoLabs </span>
      <TopicList 
        topics={topics} 
        setTopicFilter={setTopicFilter}
        isLoading={isLoading}
      />
      <FavBadge 
        isFavPhotoExist={favouriteCount} 
        selected={true}
      />
      <div className="notification">
          You have {favouriteCount} favourite photo(s)
        </div>
    </div>
  )
}

export default TopNavigation;