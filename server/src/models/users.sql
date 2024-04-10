CREATE TABLE users(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    email VARCHAR(255) NOT NULL UNIQUE,
    firstname TEXT,
    lastname TEXT
    );