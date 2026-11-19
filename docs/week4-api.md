# Week 4 — Effects, APIs, and Async UI

## API feature
The Projects section displays the latest public repositories from the GitHub user `ahashimbala`.

## Request
`GET https://api.github.com/users/ahashimbala/repos?sort=updated&per_page=4`

## UI states
- Loading: displayed while the request is in progress.
- Success: repository cards show name, description, language, and star count.
- Empty: shown if the API returns an empty array.
- Error: displays a message and Retry control.

## Cleanup
The initial request uses `AbortController`. Its signal is passed to `fetch`, and the controller is aborted when the effect is cleaned up (for example, when the component unmounts).

## Assumptions and limitations
- The endpoint returns an array of public repository objects.
- Repository information is public and does not require authentication.
- GitHub may rate-limit unauthenticated requests; this is surfaced as an error with retry.
- This feature is read-only; it does not change repositories.

## Manual verification
Test online and offline, check the loading state, retry after failure, and inspect browser DevTools Network to confirm the request and cancellation behaviour. Record the date and outcome of the checks before presenting.
