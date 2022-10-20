import Carousel from 'react-bootstrap/Carousel';

const ImageCarousel = () => {
    return (
        <Carousel className='carousel'>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-img"
                    src="https://i.pinimg.com/474x/c1/57/ca/c157ca9ba734287d85fd73a240b31418--anime-scenery-anime-pictures.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <p>Nulla vitae elit libero</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvO1VVdjEZjxq8AcFwMr50fKLrjTTO_5OaX6hpXzyTKaxZmoVxkkZRuA51LAPAyWqJbQo&usqp=CAU"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <p>Lorem ipsum dolor sit amet</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRd6X2LCpz9X4PMaHHgC0RocGhVZR_LWhFqUlBoN7cAPojp2FePSyoNM52KntrttR0-8E&usqp=CAU"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <p>Praesent commodo cursus magna</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ImageCarousel;