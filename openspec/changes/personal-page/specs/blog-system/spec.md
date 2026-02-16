## ADDED Requirements

### Requirement: Blog post listing
The system SHALL display a paginated list of blog posts with excerpts.

#### Scenario: Blog page loads
- **WHEN** user navigates to /blog
- **THEN** a list of blog posts displays with title, date, excerpt, and tags

#### Scenario: Post ordering
- **WHEN** posts are displayed
- **THEN** they are ordered by date in descending order (newest first)

### Requirement: Individual blog post pages
The system SHALL render individual blog posts from Markdown files with proper formatting.

#### Scenario: Post page renders
- **WHEN** user navigates to /blog/[slug]
- **THEN** the full blog post content displays with title, date, and formatted content

#### Scenario: Markdown rendering
- **WHEN** blog post contains Markdown syntax
- **THEN** it renders as proper HTML (headings, lists, code blocks, etc.)

### Requirement: Blog post metadata
The system SHALL extract and display blog post metadata from frontmatter.

#### Scenario: Metadata displays
- **WHEN** blog post renders
- **THEN** it shows title, date, updated date (if present), tags, and reading time

### Requirement: Featured posts on homepage
The system SHALL display the latest 3 blog posts on the homepage.

#### Scenario: Homepage blog section
- **WHEN** homepage loads
- **THEN** the latest 3 blog posts display in a grid format

#### Scenario: Link to all posts
- **WHEN** user clicks "View All Posts"
- **THEN** user navigates to the full blog listing page
