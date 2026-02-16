## ADDED Requirements

### Requirement: Resume page structure
The system SHALL provide a dedicated /resume page with professional resume layout.

#### Scenario: Resume page loads
- **WHEN** user navigates to /resume
- **THEN** a print-friendly resume page displays with all sections

### Requirement: Experience timeline
The system SHALL display work experience in a vertical timeline format.

#### Scenario: Timeline renders
- **WHEN** resume page displays
- **THEN** work history shows in chronological order with company, role, dates, and description

#### Scenario: Alternating layout
- **WHEN** timeline displays on desktop
- **THEN** entries alternate between left and right sides of the timeline

### Requirement: Skills visualization
The system SHALL display skills in a categorized visual format.

#### Scenario: Skills display
- **WHEN** skills section renders
- **THEN** skills are grouped by category (Frontend, Backend, Tools, Languages) with icons

### Requirement: Education section
The system SHALL display education history.

#### Scenario: Education renders
- **WHEN** resume page displays
- **THEN** education entries show institution, degree, and year

### Requirement: Contact information
The system SHALL display contact information including email and social links.

#### Scenario: Contact displays
- **WHEN** resume page renders
- **THEN** email and links to GitHub, LinkedIn, and other profiles are visible
