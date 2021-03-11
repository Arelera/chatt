import { baseUrl } from './config';

const getAll = async () => {
  const response = await fetch(`${baseUrl}/messages`).then((res) => res.json());
  return response;
};

const sendOne = (msg) => {
  fetch(`${baseUrl}/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ msg }),
  });
};

const messageService = { getAll, sendOne };

export default messageService;
