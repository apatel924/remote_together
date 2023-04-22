const db = require('./connection');

const insertChatMessage = (chatId, username, message) => {
  const queryString = `
    INSERT INTO chat_messages (chat_id, username, message, timestamp, created_at)
    VALUES ($1, $2, $3, NOW(), NOW())
    RETURNING *;
  `;

  return db.query(queryString, [chatId, username, message])
    .then(result => result.rows[0])
    .catch(err => console.error(err.message));
};


const getChatMessages = (chatId) => {
  const queryString = `
    SELECT * FROM chat_messages
    WHERE chat_id = $1
    ORDER BY timestamp;
  `;

  return db.query(queryString, [chatId])
    .then(result => result.rows)
    .catch(err => console.error(err.message));
};

const createChat = (title) => {
  const queryString = `
    INSERT INTO chats (title, created_at)
    VALUES ($1, NOW())
    RETURNING *;
  `;

  return db.query(queryString, [title])
    .then(result => result.rows[0])
    .catch(err => console.error(err.message));
};


// Add this function to fetch all chats
const getAllChats = () => {
  const queryString = `
    SELECT * FROM chats;
  `;

  return db.query(queryString)
    .then(result => result.rows)
    .catch(err => console.error(err.message));
};

module.exports = {
  insertChatMessage,
  getChatMessages,
  createChat,
  getAllChats
};
