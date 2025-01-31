/*
  # Blog Schema Setup

  1. New Tables
    - `posts` table for blog posts
    - `comments` table for user comments
  
  2. Security
    - RLS enabled on all tables
    - Policies for posts and comments
*/

-- Posts table and its policies
DO $$ BEGIN
  -- Create posts table
  CREATE TABLE IF NOT EXISTS posts (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    content text NOT NULL,
    excerpt text,
    published boolean DEFAULT false,
    author_id uuid NOT NULL,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now(),
    CONSTRAINT fk_author FOREIGN KEY (author_id) REFERENCES auth.users(id)
  );

  -- Enable RLS
  ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

  -- Create policies
  CREATE POLICY "Anyone can read published posts" ON posts
    FOR SELECT USING (published = true);

  CREATE POLICY "Authors can manage their own posts" ON posts
    FOR ALL USING (auth.uid() = author_id);

EXCEPTION
  WHEN duplicate_table THEN NULL;
  WHEN duplicate_policy THEN NULL;
END $$;

-- Comments table and its policies
DO $$ BEGIN
  -- Create comments table
  CREATE TABLE IF NOT EXISTS comments (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    content text NOT NULL,
    post_id uuid NOT NULL,
    user_id uuid NOT NULL,
    created_at timestamptz DEFAULT now(),
    CONSTRAINT fk_post FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES auth.users(id)
  );

  -- Enable RLS
  ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

  -- Create policies
  CREATE POLICY "Anyone can read comments" ON comments
    FOR SELECT USING (true);

  CREATE POLICY "Authenticated users can create comments" ON comments
    FOR INSERT TO authenticated
    WITH CHECK (auth.uid() = user_id);

  CREATE POLICY "Users can manage their own comments" ON comments
    FOR UPDATE USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

  CREATE POLICY "Users can delete their own comments" ON comments
    FOR DELETE USING (auth.uid() = user_id);

EXCEPTION
  WHEN duplicate_table THEN NULL;
  WHEN duplicate_policy THEN NULL;
END $$;