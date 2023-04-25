DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS business CASCADE;
DROP TABLE IF EXISTS review CASCADE;
DROP TABLE IF EXISTS favorite_list CASCADE;
DROP TABLE IF EXISTS chats CASCADE;
DROP TABLE IF EXISTS chat_messages CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  user_type VARCHAR(255) DEFAULT 'student'
);

CREATE TABLE business (
  id SERIAL PRIMARY KEY,
  address VARCHAR(255) NOT NULL,
  longitude DECIMAL(9,6) NOT NULL,
  latitude DECIMAL(9,6) NOT NULL
);

CREATE TABLE review (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  business_id INTEGER REFERENCES business(id),
  username varchar(50) not null,
  review_comment VARCHAR(50) not null,
  review_rating INT not null
);

CREATE TABLE favorite_list (
    id SERIAL PRIMARY KEY,
    business_name VARCHAR(255) ,
    business_id INTEGER REFERENCES business(id),
    user_id INTEGER REFERENCES users(id),
    title VARCHAR(255),
    place_id VARCHAR(255),
    vicinity VARCHAR(255),
    rating INT
);

CREATE TABLE chats (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
  
);

CREATE TABLE chat_messages (
  id SERIAL PRIMARY KEY,
  chat_id INTEGER  REFERENCES chats(id),
  username VARCHAR(50) NOT NULL,
  message TEXT NOT NULL,
  timestamp TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
  image TEXT
);