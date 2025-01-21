-- articles_seed.sql

-- This is used to grab all current articles to give to the database
-- Allows for new articles to be added
INSERT INTO articles (title, intro, date, read_time, image_url, link)
VALUES 
    ('The Future of AI Isn''t Large: It''s Polymorphic', 
     'As our digital world continues to grow exponentially...', 
     '2023-07-11', 
     '3 min', 
     '/path/to/image.webp',
     https://www.harpresearch.ai/post/the-future-of-ai-isn-t-large-it-s-polymorphic)
;