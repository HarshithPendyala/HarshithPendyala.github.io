import React, { useState, Component } from 'react';
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,

} from 'reactstrap';

const items = [
    {
      src: 'assets/inter.jpg',
      altText: 'img1',
      caption: 'Interstellar',
      cat: 'Action | Drama | Movie | Adventure',
      desc:'Earth\'s future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind\'s survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life.',
      imdb:'8.5',
      rating:'9'
    },
    {
      src: 'assets/tenet.jpg',
      altText: 'img2',
      caption: 'Tenet',
      cat: 'Action | Drama | Movie | Adventure',
      desc:'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
      imdb:'8.8',
      rating:'9'
    },
    {
      src: 'assets/inception.jpg',
      altText: 'img3',
      caption: 'Inception',
      cat: 'Action | Drama | Movie | Adventure',
      desc:'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      imdb:'8.8',
      rating:'9'

    }
  ];
  
  class HomeCarousel extends Component {
    constructor(props) {
      super(props);
      this.state = { activeIndex: 0 };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }
  
    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }
  
    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
  
    render() {
      const { activeIndex } = this.state;
  
      const slides = items.map((item) => {
        return (
            <CarouselItem
              className="carouselImg"
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
              >
              <img src={item.src} alt={item.altText} />
              <small className="car-small">{item.cat}</small>
              <p className="car-title"><strong>{item.caption}</strong></p>
              <Button className="car-btn1 btn-dark mx-auto"><AiIcons.AiFillPlayCircle/>Watch Trailer</Button>
              <Button className="car-btn2 btn-dark mx-auto"><AiIcons.AiFillStar/>Add to favourites</Button>
              <p className="car-desc">{item.desc}</p>
              <i className="car-rat-1"><FaIcons.FaImdb/> {item.imdb}</i>
              <i className="car-rat-2">{item.rating}</i>
            </CarouselItem>          
        );
      });
  
      return (
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          {/* <Button className="car-btn btn-dark">add to fav</Button> */}
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      );
    }
  }
  
  
  export default HomeCarousel;