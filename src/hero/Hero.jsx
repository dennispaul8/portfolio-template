
import { Container, Box, Typography, Avatar, CardContent, Card, Stack, CardMedia, Dialog, DialogContent, CircularProgress, Chip, Button } from '@mui/material';
import { useState } from 'react';
import PortfolioSlider from '../components/PortfolioSlider';

export const Hero = () => {

    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const portfolioItems = [
        { id: 1, imageUrl: 'https://images.unsplash.com/photo-1721332155567-55d1b12aa271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8', alt: 'Project 1' },
        { id: 2, imageUrl: 'https://images.unsplash.com/photo-1721332155567-55d1b12aa271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8', alt: 'Project 2' },
        { id: 3, imageUrl: 'https://images.unsplash.com/photo-1721332155567-55d1b12aa271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8', alt: 'Project 3' },
        { id: 4, imageUrl: 'https://images.unsplash.com/photo-1721332155567-55d1b12aa271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8', alt: 'Project 4' }
    ];

    const handleClickOpen = (imageUrl) => {
        setSelectedImage(imageUrl);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    return (
        <Container maxWidth="lg" sx={{ mb: 4 }}>
            {/* Profile Banner Section */}
            <Card
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1721332155567-55d1b12aa271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8)', // Replace with your background image URL
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '20px',
                    borderRadius: 2,
                    color: '#fff',
                    mb: 10,
                    height: 250,

                }}
            >


                {/* Profile Image */}
                <Box sx={{
                    ml: 3,
                    display: 'flex',
                    alignItems: 'center',
                    zIndex: 1,
                    position: 'absolute',
                    mt: 33
                }}>
                    <Avatar
                        alt="Annie Mazuri"
                        src="https://plus.unsplash.com/premium_photo-1674593231084-d8b27596b134?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
                        sx={{ width: 130, height: 130, border: '2px solid white' }}
                    />
                    <Box sx={{ ml: 3, mt: -3 }}>
                        <Typography variant="h6" fontWeight="bold">
                            Annie Mazuri
                        </Typography>
                        <Typography variant="subtitle1" sx={{ fontStyle: 'italic' }}>
                            Builder • Kawangware
                        </Typography>
                    </Box>
                </Box>
                {/* Profile Details */}
            </Card>


            {/* Main Content Section */}
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} sx={{ border: 'none' }}>
                {/* About Section */}
                <Card sx={{ flex: 1.5, border: 'none', pb:2, boxShadow:0 }}>
                    <CardContent>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            About Annie
                        </Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                    </CardContent>


                    <Box>
                        <PortfolioSlider />
                    </Box>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(10px, 0.5fr))',
                            gap: 3,
                            marginTop: 7

                        }}
                    >
                        {portfolioItems.map((item) => (
                            <Card
                                key={item.id}
                                onClick={() => handleClickOpen(item.imageUrl)}
                                sx={{ cursor: 'pointer', ml:2, mr:2 }}
                            >
                                <CardMedia
                                    component="img"
                                    height="100"
                                    image={item.imageUrl}
                                    alt={item.alt}
                                />
                            </Card>
                        ))}
                    </Box>


                    {/* Dialog for image preview */}
                    <Dialog open={open} onClose={handleClose} maxWidth="md">
                        <DialogContent>
                            <img src={selectedImage} alt="Selected Project" style={{ width: '100%' }} />
                        </DialogContent>
                    </Dialog>
                </Card>



                {/* Quick Peep Section */}
                <Card sx={{ flex: 1, textAlign: 'center', height: 700}}>
                    <CardContent>
                        <Typography variant="h6" sx={{ backgroundColor: '#e63c20', color: '#fff', p: 1, borderRadius: 1 }}>
                            Quick Peep
                        </Typography>

                        <Box sx={{ mb: 4, mt: 2, display:'flex', justifyContent:'space-evenly'}}>
                            <Box>
                            <Typography variant="body1">Working Projects</Typography>
                            <Box sx={{ position: 'relative', display: 'inline-flex', mt: 4 }}>
                                <CircularProgress variant="determinate" value={86} size={100} />
                                <Box
                                    sx={{
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0,
                                        position: 'absolute',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Typography variant="h6" component="div" color="text.primary">
                                        86%
                                    </Typography>
                                </Box>
                            </Box>
                            </Box>
                            


                            {/* Completed Projects Circular Progress */}
                            <Box>
                            <Typography variant="body1">Completed Projects</Typography>
                            <Box sx={{ position: 'relative', display: 'inline-flex', mt: 4 }}>
                                <CircularProgress variant="determinate" value={72} size={100} color="primary" />
                                <Box
                                    sx={{
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0,
                                        position: 'absolute',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Typography variant="h6" component="div" color="text.primary">
                                        72%
                                    </Typography>
                                </Box>
                            </Box>
                            </Box>
                        </Box>


                        {/* Skills section */}
                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h6" fontWeight="bold" mb={2} textAlign='left'>
                                Skills
                            </Typography>
                            <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap">
                                {['Carpentry', 'Woodworking', 'Project Management', 'Team Leadership', 'Blueprint Reading', 'Blueprint Reading'].map((skill, index) => (
                                    <Chip key={index} label={skill} color="primary" variant="outlined" sx={{ margin: '5px' }} />
                                ))}
                            </Stack>
                        </Box>

                        <Box sx={{ mt: 4, textAlign: 'left' }}>
                            <Typography variant="h6" fontWeight="bold" mb={1}>
                                Location
                            </Typography>
                            <Typography>Kawangware, Nairobi</Typography>
                        </Box>

                        <Box sx={{ mt: 2, textAlign: 'left' }}>
                            <Typography variant="h6" fontWeight="bold" mb={1}>
                                Languages
                            </Typography>
                            <Typography>English, Kiswahili</Typography>
                        </Box>

                        {/* Request a Quotation Button */}
                        <Box sx={{ mt: 4 }}>
                            <Button
                                variant="contained"
                                color="error"
                                size="large"
                                sx={{ width: '100%', borderRadius: 2 }}
                            >
                                Request A Quotation
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Stack>
        </Container>
    );
}
