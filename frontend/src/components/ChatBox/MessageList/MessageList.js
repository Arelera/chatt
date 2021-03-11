import { List, ListItem, ListItemText } from '@material-ui/core';

export default function MessageList({ messages }) {
  return (
    <List>
      {messages.map((msg, i) => (
        <ListItem divider={true} key={i}>
          <ListItemText
            style={{
              textAlign: msg.owner === '1' ? 'right' : 'left',
            }}
            primary={msg.content}
          />
        </ListItem>
      ))}
    </List>
  );
}
