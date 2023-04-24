-- USER SEEDS
INSERT INTO users (username, email, password, user_type) VALUES ('username', 'email@email.ca', '123', 'student');

-- BUSINESS SEEDS
INSERT INTO business (address, longitude, latitude) VALUES ('123 street',53.5461,-113.4937);

-- REVIEW SEEDS
INSERT INTO review (username, review_comment, review_rating) VALUES ('bob', 'nice seats', 4);
INSERT INTO review (username, review_comment, review_rating) VALUES ('cindy', 'good coffee', 5);
INSERT INTO review (username, review_comment, review_rating) VALUES ('greg', 'donuts', 3);

-- FAVORITE SEEDS
INSERT INTO favorite_list(business_name, place_id,vicinity, rating) VALUES ('Starbucks', 'ChIJhY3WOoshoFMRXUYTxqArSfI', '89 Ave NW &, 116 St NW, Edmonton', 2 );
INSERT INTO favorite_list(business_name, place_id,vicinity, rating) VALUES ('Edmonton Public Library - Capilano', 'ChIJHc_2Bb0ioFMRR8vCeGu4RE4', '9915 67 St NW, Edmonton', 4.3);
