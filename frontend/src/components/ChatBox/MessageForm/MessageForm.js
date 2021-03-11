import { InputAdornment, InputLabel, TextField } from '@material-ui/core';
import ModeComment from '@material-ui/icons/ModeComment';
import { useState } from 'react';

export default function MessageForm({ sendMessage }) {
  const [message, setMessage] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (message) {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <InputLabel htmlFor="message" />
      <TextField
        id="message"
        variant="outlined"
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ModeComment />
            </InputAdornment>
          ),
        }}
        fullWidth
      />
    </form>
  );
}
