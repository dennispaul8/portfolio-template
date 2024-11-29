import {
    Typography,
    Button,
    Box,
    Card,
    CardContent,
    Container,
} from "@mui/material";

const Article = () => {
    return (
        <>
            {/* Hero Section */}
            <Box
                sx={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1721332155567-55d1b12aa271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: { xs: "400px", md: "590px" },
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    padding: { xs: "0 20px", md: "0 100px" },
                }}
            >
                <Box sx={{ width: { xs: "100%", md: "45%" } }}>
                    <Typography
                        variant="h2"
                        fontWeight="500"
                        sx={{
                            fontSize: { xs: 28, sm: 35, md: 40 },
                            mt: { xs: 6, md: 12 },
                        }}
                    >
                        Lore ipsum is simply
                        <span style={{ color: "#d3d3d3" }}> dummy </span>
                        <span style={{ borderBottom: "3px solid #FF5733" }}> text of </span>{" "}
                        the <span style={{ color: "#d3d3d3" }}>printing</span> industry
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{ mt: 2, fontSize: { xs: 14, sm: 16, md: 18 } }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                        quia, eius culpa voluptatem modi possimus itaque beatae ullam
                        delectus amet ipsa consectetur impedit assumenda quis dolores nemo
                        provident excepturi vel.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            mt: 4,
                            color: "#FF5733",
                            fontWeight: 700,
                            backgroundColor: "white",
                            p: 1.4,
                        }}
                    >
                        Read Article
                    </Button>
                </Box>
            </Box>

            {/* Content Section */}
            <Box sx={{ py: 6 }}>
                <Container maxWidth="lg">
                    {/* Section Title */}
                    <Box sx={{ textAlign: "center", mb: 4 }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    height: "3px",
                                    width: "49px",
                                    backgroundColor: "#FF5733",
                                    mr: 1.1,
                                }}
                            />
                            <Typography
                                variant="h6"
                                component="h3"
                                color="#FF5733"
                                sx={{ fontWeight: "bold", fontSize: 15 }}
                            >
                                Soft Skills
                            </Typography>
                        </Box>
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                fontWeight: 400,
                                mt: 1,
                                fontSize: { xs: 22, md: 27 },
                            }}
                        >
                            Are You <span style={{ color: "#d3d3d3" }}>Ready</span> to Get{" "}
                            <span style={{ color: "#d3d3d3" }}>Started?</span>
                        </Typography>
                    </Box>

                    {/* Main Text */}
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                            mb: 6,
                            textAlign: "justify",
                            mt: -3,
                            fontSize: { xs: 14, md: 16 },
                        }}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga vitae, repellat incidunt, numquam laudantium iure
                        suscipit nostrum, voluptas nemo doloremque quis eius harum vel
                        similique quo aspernatur eaque ullam. Sed? Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Similique maiores nemo illum
                        minus ratione eum sapiente est impedit ipsam ullam et, expedita
                        quaerat deleniti ex in inventore ea nesciunt blanditiis.
                    </Typography>

                    {/* Image and Overlapping Card */}
                    <Box
                        sx={{
                            position: "relative",
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            alignItems: "center",
                        }}
                    >
                        <Box
                            component="img"
                            src="https://plus.unsplash.com/premium_photo-1674593231084-d8b27596b134?w=500&auto=format&fit=crop&q=60"
                            alt="Skills Image"
                            sx={{
                                height: { xs: "200px", sm: "300px", md: "370px" },
                                width: "100%",
                                ml: { xs: "1px", sm: "30px", md: "147px" }
                            }}
                        />

                        <Card
                            elevation={0}
                            sx={{
                                position: { xs: "static", md: "absolute" },
                                top: { md: "50%" },
                                left: { md: "-6%" },
                                transform: { md: "translateY(-50%)" },
                                backgroundColor: "#d3d3d3",
                                p: 8,
                                opacity: 0.8,
                                width: { xs: "10", sm: "350px" },
                                ml: { xs: "1px", sm: "30px", md: "80px" }
                            }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        mb: 2,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            height: "3px",
                                            width: "49px",
                                            backgroundColor: "#FF5733",
                                            mr: 1.1,

                                        }}
                                    />
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        color="#FF5733"
                                        sx={{ fontWeight: "bold", fontSize: 15 }}
                                    >
                                        Get Started
                                    </Typography>
                                </Box>
                                <Typography
                                    variant="body2"
                                    color="black"
                                    sx={{
                                        textAlign: "justify",
                                        fontSize: { xs: 12, md: 14 },
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>

                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{

                            textAlign: "justify",
                            mt: 6,
                            fontSize: { xs: 14, md: 16 },
                        }}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga vitae, repellat incidunt, numquam laudantium iure
                        suscipit nostrum, voluptas nemo doloremque quis eius harum vel
                        similique quo aspernatur eaque ullam. Sed? Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Similique maiores nemo illum
                        minus ratione eum sapiente est impedit ipsam ullam et, expedita
                        quaerat deleniti ex in inventore ea nesciunt blanditiis.
                    </Typography>
                </Container>
            </Box>

            {/* Blog Section */}
            <Container sx={{ py: 2 }}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                        ml: 0.3,
                    }}
                >
                    <Box
                        sx={{
                            height: "3px",
                            width: "49px",
                            backgroundColor: "#FF5733",
                            mr: 1.1,
                        }}
                    />
                    <Typography
                        variant="h6"
                        component="h3"
                        color="#FF5733"
                        sx={{ fontWeight: "bold", fontSize: 15 }}
                    >
                        Latest Blogs
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: 4,
                        justifyContent: "center",
                    }}
                >
                    {[1, 2, 3].map((item) => (
                        <Box
                            key={item}
                            sx={{
                                flex: 1,
                                maxWidth: 370,
                                height: 350,
                                backgroundImage:
                                    "url('https://plus.unsplash.com/premium_photo-1674593231084-d8b27596b134?w=500&auto=format&fit=crop&q=60')",
                                backgroundSize: "cover",
                            }}
                        >
                            <CardContent
                                sx={{
                                    backgroundColor: "black",
                                    width: "300px",
                                    margin: "0 auto",
                                    mt: 35,
                                    color: "white",
                                    border: "1px solid white",
                                }}
                            >
                                <Typography variant="h6">Lorem Ipsum Dolor</Typography>
                                <Typography variant="body2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    do eiusmod tempor.
                                </Typography>
                            </CardContent>
                        </Box>
                    ))}
                </Box>
            </Container>
        </>
    );
};

export default Article;
