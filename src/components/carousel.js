import React from 'react'
import {Carousel, CarouselItem} from "react-bootstrap";
import Image from "./image";

function ImageCarousel(props) {
    return (
        <Carousel fade wrap={false} className="centered">
            {props.images.map((item, i) => (
                <CarouselItem key={i}>
                    <Image src={item}/>
                </CarouselItem>
            ))}
        </Carousel>
    );
}

export default ImageCarousel;
