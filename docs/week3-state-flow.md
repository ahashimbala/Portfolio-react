# Week 3 — State, Forms, and Data Flow

## Feature examples
1. Project category selection and expanded/collapsed list.
2. Controlled contact form managed by `useReducer`.
3. Derived project list and result count, calculated from the project data and selected filter.

## State-flow diagram
```text
Projects data (constant)
        |
selected category (useState) + expanded (useState)
        |
filtered projects (useMemo / derived value)
        |
visible projects + result count + cards

Contact fields + errors + submission status
        |
useReducer actions: field / validate / status / reset
        |
Controlled inputs -> validation feedback -> submit flow
```

## Why this structure?
- The filter state belongs to the Projects section because only that section needs it.
- The visible project list and count are derived; they are not stored as separate state.
- The contact form has multiple related values and status transitions, so a reducer makes the updates explicit.

## Manual checks to complete
- Change each project filter and check the count/list update.
- Expand/collapse the project list.
- Submit the form empty and check validation feedback.
- Enter a valid name, email, and message; verify errors clear as fields are corrected.
- Explain the reducer's `field`, `validate`, `status`, and `reset` actions in your own words.
