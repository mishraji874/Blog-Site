-- Posts table and its policies
DO $$ BEGIN -- Create posts table
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
-- Check and create policies
IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE tablename = 'posts'
        AND policyname = 'Anyone can read published posts'
) THEN CREATE POLICY "Anyone can read published posts" ON posts FOR
SELECT USING (published = true);
END IF;
IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE tablename = 'posts'
        AND policyname = 'Authors can manage their own posts'
) THEN CREATE POLICY "Authors can manage their own posts" ON posts FOR ALL USING (auth.uid() = author_id);
END IF;
EXCEPTION
WHEN duplicate_table THEN NULL;
END $$;