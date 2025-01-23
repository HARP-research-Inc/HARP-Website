-- Using Neon DB, to run the script, use the following command:
-- psql "postgresql://teamMembersDB_owner:npg_TW2amo6dINZF@ep-holy-unit-a8aq9e5m-pooler.eastus2.azure.neon.tech/teamMembersDB?sslmode=require"
-- \i path/to/this/script.sql

-- Use curl http://localhost:3000/api/team-members (this should print out the SQL table)


-- -- Create team_members table
-- CREATE TABLE team_members (
--     name VARCHAR(100) NOT NULL,
--     role VARCHAR(100) NOT NULL,
--     founder BOOLEAN DEFAULT false,
--     image_path TEXT NOT NULL,
--     github_url VARCHAR(255),
--     linkedin_url VARCHAR(255),
--     semester VARCHAR(50),
--     member_type VARCHAR(50)
-- );

-- Insert team members data
INSERT INTO team_members (name, role, founder, image_path, github_url, linkedin_url, semester, member_type) VALUES
    ('Harper Chisari', 'Chief Executive Officer', true, 'src/assets/HARPResearchLockUps/TeamMember/ManagementTeam/HarperChisari/HarperChisari.png', 'https://github.com/dashboard', 'https://www.linkedin.com/feed/', 'Admin', 'Admin'),
    ('Matthew Tavares', 'Researcher Intern', false, 'src/assets/HARPResearchLockUps/TeamMember/Intern/MatthewTavares.png', 'https://github.com/dashboard', 'https://www.linkedin.com/feed/', 'Fall 2024', 'Researcher'),
    ('Michael Ortega', 'Full Stack Developer Intern', false, 'src/assets/HARPResearchLockUps/TeamMember/Intern/MichaelOrtega.png', 'https://github.com/dashboard', 'https://www.linkedin.com/feed/', 'Fall 2024', 'Developer');
