import { Box, CircularProgress } from '@material-ui/core';
import { useEffect, useState } from 'react';
import messageService from '../../services/messageService';
import MessageForm from './MessageForm/MessageForm';
import MessageList from './MessageList/MessageList';

export default function ChatBox() {
  const [messages, setMessages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    messageService.getAll().then((res) => {
      setMessages(res);
      setIsLoading(false);
    });
  }, []);

  const sendMessage = (msg) => {
    messageService.sendOne(msg);
    setMessages([...messages, { content: msg, owner: '1' }]);
  };

  return (
    <Box>
      {isLoading ? (
        <Box display="flex" justifyContent="center" m={4}>
          <CircularProgress />
        </Box>
      ) : (
        <MessageList messages={messages} />
      )}
      <MessageForm sendMessage={sendMessage} />
    </Box>
  );
}
