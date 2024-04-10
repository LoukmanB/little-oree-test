CREATE TABLE identifications (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    user_id uuid REFERENCES users(user_id) ON DELETE CASCADE,
    modified_at TIMESTAMP NOT NULL DEFAULT NOW(),
    hash VARCHAR(255),
    salt VARCHAR(255)
    );