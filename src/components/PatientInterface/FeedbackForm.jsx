import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Box,
} from '@mui/material';
import { Star, ThumbsUp } from 'lucide-react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    doctorName: '',
    department: '',
    visitDate: '',
    rating: 0,
    waitingTime: '',
    cleanliness: '',
    staffBehavior: '',
    treatment: '',
    comments: '',
    recommend: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const departments = [
    'Cardiology',
    'Orthopedics',
    'Pediatrics',
    'Neurology',
    'Dentistry',
    'General Medicine',
    'Gynecology',
    'Ophthalmology',
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.patientName.trim()) newErrors.patientName = 'Patient name is required';
    if (!formData.doctorName.trim()) newErrors.doctorName = 'Doctor name is required';
    if (!formData.department) newErrors.department = 'Department is required';
    if (!formData.visitDate) newErrors.visitDate = 'Visit date is required';
    if (!formData.rating) newErrors.rating = 'Rating is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      console.log('Form submitted:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const renderStars = () => {
    return (
      <Box display="flex" gap={1}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={32}
            className={`cursor-pointer transition-colors ${
              star <= formData.rating
                ? 'fill-[#0077b6] text-[#0077b6]'
                : 'text-gray-300'
            }`}
            onClick={() =>
              handleInputChange({ target: { name: 'rating', value: star } })
            }
          />
        ))}
      </Box>
    );
  };

  if (submitted) {
    return (
      <Card className="max-w-2xl mx-auto mt-8">
        <CardContent className="text-center">
          <ThumbsUp className="text-[#0077b6] mx-auto w-16 h-16" />
          <Typography variant="h5" color="primary" gutterBottom>
            Thank You for Your Feedback!
          </Typography>
          <Typography color="textSecondary">
            Your feedback helps us improve our services.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className="mt-4"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                patientName: '',
                doctorName: '',
                department: '',
                visitDate: '',
                rating: 0,
                waitingTime: '',
                cleanliness: '',
                staffBehavior: '',
                treatment: '',
                comments: '',
                recommend: '',
                email: '',
              });
            }}
          >
            Submit Another Response
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto mt-8 p-4">
      <CardHeader
        title="Patient Feedback Form"
        titleTypographyProps={{ align: 'center', fontWeight: 'bold', color: '#03045e' }}
      />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Box display="grid" gap={3}>
            <TextField
              label="Patient Name"
              name="patientName"
              value={formData.patientName}
              onChange={handleInputChange}
              error={!!errors.patientName}
              helperText={errors.patientName}
              fullWidth
            />
            <TextField
              label="Doctor Name"
              name="doctorName"
              value={formData.doctorName}
              onChange={handleInputChange}
              error={!!errors.doctorName}
              helperText={errors.doctorName}
              fullWidth
            />
            <FormControl fullWidth error={!!errors.department}>
              <InputLabel>Department</InputLabel>
              <Select
                name="department"
                value={formData.department}
                onChange={handleInputChange}
              >
                <MenuItem value="">
                  <em>Select Department</em>
                </MenuItem>
                {departments.map((dept) => (
                  <MenuItem key={dept} value={dept}>
                    {dept}
                  </MenuItem>
                ))}
              </Select>
              {errors.department && (
                <Typography variant="caption" color="error">
                  {errors.department}
                </Typography>
              )}
            </FormControl>
            <TextField
              label="Visit Date"
              name="visitDate"
              type="date"
              value={formData.visitDate}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
              error={!!errors.visitDate}
              helperText={errors.visitDate}
              fullWidth
            />
            <Box>
              <Typography gutterBottom>Overall Rating *</Typography>
              {renderStars()}
              {errors.rating && (
                <Typography variant="caption" color="error">
                  {errors.rating}
                </Typography>
              )}
            </Box>
            <FormControl fullWidth>
              <InputLabel>Waiting Time Experience</InputLabel>
              <Select
                name="waitingTime"
                value={formData.waitingTime}
                onChange={handleInputChange}
              >
                <MenuItem value="">Select Option</MenuItem>
                <MenuItem value="Excellent">Excellent (0-15 mins)</MenuItem>
                <MenuItem value="Good">Good (15-30 mins)</MenuItem>
                <MenuItem value="Fair">Fair (30-45 mins)</MenuItem>
                <MenuItem value="Poor">Poor (45+ mins)</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Cleanliness & Hygiene</InputLabel>
              <Select
                name="cleanliness"
                value={formData.cleanliness}
                onChange={handleInputChange}
              >
                <MenuItem value="">Select Option</MenuItem>
                <MenuItem value="Excellent">Excellent</MenuItem>
                <MenuItem value="Good">Good</MenuItem>
                <MenuItem value="Fair">Fair</MenuItem>
                <MenuItem value="Poor">Poor</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Staff Behavior & Helpfulness</InputLabel>
              <Select
                name="staffBehavior"
                value={formData.staffBehavior}
                onChange={handleInputChange}
              >
                <MenuItem value="">Select Option</MenuItem>
                <MenuItem value="Excellent">Excellent</MenuItem>
                <MenuItem value="Good">Good</MenuItem>
                <MenuItem value="Fair">Fair</MenuItem>
                <MenuItem value="Poor">Poor</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Treatment Satisfaction</InputLabel>
              <Select
                name="treatment"
                value={formData.treatment}
                onChange={handleInputChange}
              >
                <MenuItem value="">Select Option</MenuItem>
                <MenuItem value="Very Satisfied">Very Satisfied</MenuItem>
                <MenuItem value="Satisfied">Satisfied</MenuItem>
                <MenuItem value="Neutral">Neutral</MenuItem>
                <MenuItem value="Dissatisfied">Dissatisfied</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Additional Comments"
              name="comments"
              value={formData.comments}
              onChange={handleInputChange}
              multiline
              rows={4}
              fullWidth
            />
            <FormControl component="fieldset">
              <Typography>Would you recommend us?</Typography>
              <RadioGroup
                name="recommend"
                value={formData.recommend}
                onChange={handleInputChange}
                row
              >
                <FormControlLabel
                  value="Yes"
                  control={<Radio color="primary" />}
                  label="Yes"
                />
                <FormControlLabel
                  value="No"
                  control={<Radio color="primary" />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
            />
          </Box>
          <Box mt={4}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Submit Feedback
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default FeedbackForm;
