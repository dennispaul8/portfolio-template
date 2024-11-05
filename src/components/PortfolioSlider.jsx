import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, Typography } from '@mui/material';

const PortfolioSlider = () => {
  const images = [
    'https://images.unsplash.com/photo-1721332155567-55d1b12aa271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8', // Replace with your image URLs
    'https://images.unsplash.com/photo-1721332155567-55d1b12aa271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1721332155567-55d1b12aa271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1721332155567-55d1b12aa271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Portfolio
      </Typography>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} sx={{ padding: 1 }}>
            <img
              src={image}
              alt={`Portfolio ${index + 1}`}
              style={{ width: '100%', borderRadius: '8px', height: '400px' }}
            />
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default PortfolioSlider;