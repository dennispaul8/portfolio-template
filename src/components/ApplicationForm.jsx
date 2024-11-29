
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useState } from "react";

const ApplicationForm = () => {

  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    resume: null,
    coverLetter: null,
  });

  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    resume: "",
    coverLetter: "",
  });

  const handleChange = (field, value) => {
    setFormValues({ ...formValues, [field]: value });
    setFormErrors({ ...formErrors, [field]: "" });
  };

  const handleFileChange = (field, file) => {
    setFormValues({ ...formValues, [field]: file });
    setFormErrors({ ...formErrors, [field]: "" });
  };

  const validate = () => {
    let errors = {};
    if (!formValues.fullName) errors.fullName = "Full name is required.";
    if (!formValues.email) {
      errors.email = "Email address is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formValues.email)
    ) {
      errors.email = "Invalid email address.";
    }
    if (!formValues.phone) {
      errors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formValues.phone)) {
      errors.phone = "Phone number must be 10 digits.";
    }
    if (!formValues.experience) errors.experience = "Experience is required.";
    if (!formValues.resume) errors.resume = "Resume is required.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully:", formValues);
    }
  };
  return (
    <>
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
              fontSize: { xs: 12, md: 14 }
            }}
          >
            Back Job Openings
          </Button>
        </Box>
      </Box>


      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          {/* Left Section */}
          <Box flex={1}>
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontWeight: 500, mb: 2 }}
            >
              Finance <span style={{ color: "#d3d3d3" }}>Manager</span>
            </Typography>
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
                sx={{
                  fontWeight: "bold",
                  fontSize: 15,
                  textTransform: "uppercase",
                }}
              >
                The Role
              </Typography>
            </Box>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                ml: 0.3,
                mt: 4
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
                sx={{
                  fontWeight: "bold",
                  fontSize: 15,
                  textTransform: "uppercase",
                }}
              >
                Job Description
              </Typography>
            </Box>
            <ul style={{ marginLeft: '-20px' }}>
              <li>
                <Typography variant="body1" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" color="text.secondary">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" color="text.secondary">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" color="text.secondary">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt.
                </Typography>
              </li>
            </ul>
          </Box>

          {/* Right Section */}
          <Box
            flex={1}
            sx={{
              p: 4,
              border: 0,
              borderRadius: 2,
              backgroundColor: "white",
            }}
          >
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
                sx={{
                  fontWeight: "bold",
                  fontSize: 15,
                  textTransform: "uppercase",
                }}
              >
                Application Form
              </Typography>
            </Box>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
              minim veniam.
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Full name"
                variant="outlined"
                value={formValues.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                error={!!formErrors.fullName}
                helperText={formErrors.fullName}
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#FF5733",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    "&.Mui-focused": {
                      color: "#FF5733",
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Email address"
                variant="outlined"
                value={formValues.email}
                onChange={(e) => handleChange("email", e.target.value)}
                error={!!formErrors.email}
                helperText={formErrors.email}
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#FF5733",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    "&.Mui-focused": {
                      color: "#FF5733",
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Phone number"
                variant="outlined"
                value={formValues.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                error={!!formErrors.phone}
                helperText={formErrors.phone}
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#FF5733",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    "&.Mui-focused": {
                      color: "#FF5733",
                    },
                  },
                  
                }}
              />
              <FormControl fullWidth sx={{ mb: 2 }} error={!!formErrors.experience}>
                <InputLabel id="experience-label"
                  sx={{
                    "&.Mui-focused": {
                      color: "#FF5733",
                    },
                    fontSize:{xs:14, md:16}
                  }}

                >How many years of experience do you have?</InputLabel>
                <Select
                  labelId="experience-label"
                  value={formValues.experience}
                  label="How many years of experience do you have?"
                  onChange={(e) => handleChange("experience", e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#ccc',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#888',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#FF5733',
                    },
                  }}
                >
                  <MenuItem value="0">0 Years</MenuItem>
                  <MenuItem value="1">1 Year</MenuItem>
                  <MenuItem value="2">2 Years</MenuItem>
                </Select>
                <Typography variant="caption" color="error">
                  {formErrors.experience}
                </Typography>
              </FormControl>

              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 1.5,
                    justifyContent: "space-between",
                    mb: 2,
                    backgroundColor: "#fff",
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    Your Resume / CV (pdf, doc, docx. <strong>Max: 10MB</strong>)
                  </Typography>
                  <Button
                    variant="outlined"
                    component="label"
                    sx={{
                      ml: 2,
                      color: "gray",
                      border: "1px solid gray",
                      fontSize:{xs:11, md:13}
                    }}
                  >
                    Browse
                    <input
                      type="file"
                      hidden
                      onChange={(e) => handleFileChange("resume", e.target.files[0])}
                    />
                  </Button>
                </Box>
                {formErrors.resume && (
                  <Typography variant="caption" color="error">
                    {formErrors.resume}
                  </Typography>
                )}

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 1.5,
                    justifyContent: "space-between",
                    backgroundColor: "#fff",
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    Your Cover Letter (pdf, doc, docx. <strong>Max: 10MB</strong>)
                  </Typography>
                  <Button
                    variant="outlined"
                    component="label"
                    sx={{
                      ml: 2,
                      color: "gray",
                      border: "1px solid gray",
                      fontSize:{xs:11, md:13}
                    }}
                  >
                    Browse
                    <input
                      type="file"
                      hidden
                      onChange={(e) => handleFileChange("coverLetter", e.target.files[0])}
                    />
                  </Button>
                </Box>
                {formErrors.coverLetter && (
                  <Typography variant="caption" color="error">
                    {formErrors.coverLetter}
                  </Typography>
                )}
              </Box>

              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#FF5733",
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#e14e2b" },
                }}
              >
                Submit Application
              </Button>
            </form>
          </Box>
        </Box>
      </Container>
    </>

  );
};

export default ApplicationForm;
