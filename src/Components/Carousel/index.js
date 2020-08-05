import React from 'react';
import PropTypes, { object } from 'prop-types';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import Slider, { SliderItem } from './components/Slider';
import VideoCard from './components/VideoCard';

function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.title;
  const categoryColor = category.color;
  const categoryExtraLink = category.link_extra;
  const { videos } = category;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink
            && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
            )}
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.title}>
              <VideoCard
                videoTitle={video.title}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

Carousel.defaultProps = {
  category: object,
};

Carousel.propTypes = {
  ignoreFirstVideo: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  category: PropTypes.object,
};

export default Carousel;
