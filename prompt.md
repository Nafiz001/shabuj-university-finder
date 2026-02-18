# ROLE

Act as a Senior Full Stack Developer with strong experience in:

- Next.js 14+ (App Router)
- TypeScript
- REST API design
- Clean Architecture
- Tailwind CSS
- Performance optimization
- SEO best practices
- Git workflow discipline

You are building a production-ready "University Finder" module
for a technical assessment.

Think like a senior engineer whose code will be reviewed line-by-line.

---

# GIT WORKFLOW (MANDATORY)

This project is connected to:

Repository:
https://github.com/Nafiz001/shabuj-university-finder.git

Branch: main

After completing EACH major section (data model, API, page, filters, compare feature, SEO optimization):

1. Stage changes
2. Commit using Conventional Commit format
3. Push to GitHub

Conventional commit format examples:

feat: implement university data model
feat: add server-side filtering API
feat: build university listing page
feat: implement advanced filters
feat: add compare universities modal
feat: implement SEO metadata handling
refactor: improve filtering logic structure
fix: correct sorting edge case
style: improve tailwind layout spacing

Commit frequently.
Small, clean, logical commits only.
Never push large messy changes.

---

# PROJECT CONTEXT

We are building a "Find University" page for an education consultancy platform.

Tech Stack:

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Backend filtering using Next.js API Route
- Dummy data (no database required, but architecture must allow future DB integration)

---

# REQUIRED FEATURES

## 1. Data Model

Create dummy university data with at least 20–30 realistic universities.

Fields:

- id
- name
- country
- city
- tuitionFee (number)
- ranking (number)
- establishedYear (number)
- scholarshipAvailable (boolean)
- ieltsRequirement (number)

Place data and filter logic in:

lib/universities.ts

Keep logic reusable and scalable.

After completing:
COMMIT → feat: implement university data model

---

## 2. Project Structure

Use this structure:

app/
  universities/
    page.tsx
    loading.tsx
  api/
    universities/
      route.ts

components/
  Filters.tsx
  UniversityCard.tsx
  CompareModal.tsx

lib/
  universities.ts

Clean separation of concerns.
Avoid duplication.

After scaffolding:
COMMIT → chore: setup project structure

---

## 3. Server-Side Filtering (CRITICAL REQUIREMENT)

Filtering MUST happen in backend.

Use query parameters:

- country=
- minTuition=
- maxTuition=
- minRanking=
- maxRanking=
- establishedAfter=
- scholarshipAvailable=
- maxIelts=
- sortBy=tuition|ranking
- order=asc|desc

Requirements:

- Support multiple filters simultaneously
- Apply sorting AFTER filtering
- Clean error handling
- Efficient logic
- Return JSON response
- Scalable design

DO NOT:

- Fetch all universities in client and filter with useEffect
- Perform filtering inside React state

After completing:
COMMIT → feat: add server-side filtering API

---

## 4. Universities Page (/universities)

Requirements:

- Read searchParams
- Fetch filtered data server-side
- Use Server Components where possible
- Proper <h1>
- Semantic layout
- Responsive grid with Tailwind
- loading.tsx implemented
- "No results found" state

Filters must update URL:

/universities?country=Canada&minRanking=1&maxRanking=100

After completing:
COMMIT → feat: build universities page with server rendering

---

## 5. Filters Component

Requirements:

- Controlled form
- On submit → update URL query parameters
- No filtering logic inside component
- Clean Tailwind styling
- Responsive design

After completing:
COMMIT → feat: implement filter UI component

---

## 6. Compare Universities (Bonus Feature)

Requirements:

- Select up to 2 universities
- Store selected IDs in client state
- Show comparison in modal
- Side-by-side table
- Mobile responsive
- Clean Tailwind design

Fields:

- Name
- Country
- Tuition Fee
- Ranking
- Established Year
- IELTS Requirement
- Scholarship Availability

Filtering remains server-side.
Compare logic can be client-side.

After completing:
COMMIT → feat: add compare universities modal

---

## 7. SEO Optimization

Implement:

- generateMetadata() in page.tsx
- Dynamic metadata based on filters
- Proper <h1>
- Semantic HTML
- Minimal client components
- Performance-focused structure

After completing:
COMMIT → feat: implement dynamic SEO metadata

---

# PERFORMANCE STANDARDS

- Use Server Components by default
- Use "use client" only when required
- Avoid unnecessary re-renders
- Clean TypeScript types
- Future-ready for DB integration
- Maintain clean code and naming conventions

---

# OUTPUT EXPECTATION

Generate:

- Full folder structure
- Complete TypeScript code
- Clean and maintainable implementation
- Senior-level architecture
- Small incremental commits
- Frequent pushes to GitHub

Act like this code will be reviewed by a senior engineer.
Avoid beginner patterns.
Prioritize clarity, scalability, and performance.
