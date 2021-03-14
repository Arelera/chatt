import { Box, CircularProgress } from '@material-ui/core';
import { useEffect, useRef, useState } from 'react';
import messageService from '../../services/messageService';
import MessageForm from './MessageForm/MessageForm';
import MessageList from './MessageList/MessageList';

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let ws = useRef(null);
  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:3001');

    ws.current.onopen = () => {
      console.log('Websocket connected.');
    };
    ws.current.onclose = () => {
      console.log('Websocket closed.');
    };

    ws.current.onmessage = ({ data }) => {
      setMessages((oldMessages) => [...oldMessages, { content: data }]);
    };
    return () => {
      console.log('Closing websocket.');
      ws.current.close();
    };
  }, []);

  useEffect(() => {
    // initialize messages
    messageService
      .getAll()
      .then((res) => {
        setMessages(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setMessages([]);
        setIsLoading(false);
      });
  }, []);

  const sendMessage = (msg) => {
    messageService.sendOne(msg);
    ws.current.send(msg);

    setMessages((oldMessages) => [
      ...oldMessages,
      { content: msg, owner: '1' },
    ]);
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
