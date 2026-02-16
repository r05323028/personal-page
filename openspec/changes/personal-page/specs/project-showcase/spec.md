## ADDED Requirements

### Requirement: Masonry grid layout
The system SHALL display projects in a responsive masonry grid layout that adapts to different screen sizes.

#### Scenario: Desktop grid
- **WHEN** viewport is 1024px or wider
- **THEN** projects display in a 3-column masonry grid

#### Scenario: Tablet grid
- **WHEN** viewport is between 768px and 1023px
- **THEN** projects display in a 2-column masonry grid

#### Scenario: Mobile grid
- **WHEN** viewport is narrower than 768px
- **THEN** projects display in a single column

### Requirement: Project cards with hover overlay
The system SHALL render project cards that reveal additional information on hover.

#### Scenario: Card hover
- **WHEN** user hovers over a project card
- **THEN** an overlay appears showing project title, description, and technology tags

#### Scenario: Card click
- **WHEN** user clicks a project card
- **THEN** user navigates to the project detail page or external link

### Requirement: Project metadata display
The system SHALL display project information from Markdown frontmatter including title, description, date, tags, and links.

#### Scenario: Project renders with metadata
- **WHEN** project card displays
- **THEN** it shows the title, description, date, and category tags from the Markdown file

### Requirement: Category filtering
The system SHALL allow filtering projects by category.

#### Scenario: Filter by category
- **WHEN** user selects a category filter
- **THEN** only projects matching that category are displayed

#### Scenario: Show all
- **WHEN** user selects "All" filter
- **THEN** all projects are displayed
