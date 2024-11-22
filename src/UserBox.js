import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  InputAdornment,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle'; // Import Icon

const CreateUserBox = () => {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: 'auto',
        padding: 3,
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: 3,
        textAlign: 'center',
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        Welcome to Jayjay Lesson
      </Typography>

      <form onSubmit={handleSubmit}>
        {/* Nama User dengan Ikon */}
        <TextField
          fullWidth
          label="Nama User"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />

        {/* Pilih Jabatan */}
        <FormControl fullWidth margin="normal" required>
          <InputLabel id="job-label">Pilih Jabatan</InputLabel>
          <Select
            labelId="job-label"
            value={job}
            onChange={(e) => setJob(e.target.value)}
          >
            <MenuItem value="Admin">Administrator</MenuItem>
            <MenuItem value="Manager">Manager</MenuItem>
            <MenuItem value="Supervisor">SPV</MenuItem>
            <MenuItem value="Agen">Agen</MenuItem>
          </Select>
        </FormControl>

        {/* Button Buat User */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: 2, width: '100%' }}
        >
          BUAT USER BARU
        </Button>
      </form>

      {/* Message */}
      {submitted && (
        <Box sx={{ marginTop: 3, textAlign: 'left' }}>
          <Typography variant="h6" color="success.main">
            User Baru Sudah Berhasil Dibuat!
          </Typography>
          <Typography variant="body1">
            <strong>Nama User:</strong> {name}
          </Typography>
          <Typography variant="body1">
            <strong>Jabatan:</strong> {job === 'SPV' ? 'Supervisor' : job}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default CreateUserBox;
