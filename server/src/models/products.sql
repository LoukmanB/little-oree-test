CREATE TABLE products(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    name VARCHAR(255) NOT NULL UNIQUE,
    category VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    characteristics JSON,
    helps JSON,
    user_id uuid REFERENCES users(user_id) ON DELETE CASCADE
    );