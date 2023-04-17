-- USER SEEDS
INSERT INTO users (username, email, password, user_type) VALUES ('username', 'email@email.ca', '123', 'student');

-- BUSINESS SEEDS
INSERT INTO business (address, longitude, latitude) VALUES ('123 street',53.5461,-113.4937);

-- REVIEW SEEDS
INSERT INTO review (review_comment, review_rating) VALUES ('five star', 5);

-- FAVORITE SEEDS
INSERT INTO favorite_list(favorite_business, title) VALUES ('abc coffee shop', 'title?')