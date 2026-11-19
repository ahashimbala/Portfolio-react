# Week 5 — AI-Assisted Frontend Workflow

The goal of this module is to use AI as a planner, explainer, and reviewer. AI output is not treated as automatically correct.

## Prompt comparison (same task: implement project filtering)

### Prompt A — broad
“Add project filtering to my React portfolio.”
- Expected weakness to evaluate: it may make assumptions about project structure and add unnecessary code.

### Prompt B — context-rich
“Review my existing React portfolio. I have project objects with a category field and category buttons. Explain a minimal implementation plan using state and derived data. Do not write code yet, and preserve the design.”
- Compare: whether the answer respects the existing project structure and avoids duplicate state.

### Prompt C — constrained
“Given my current Projects component and data array, plan category filtering using one state value and a derived filtered array. Keep the existing UI unchanged. List edge cases and tests; do not write code.”
- Compare: specificity, edge-case coverage, and whether the advice is easier to verify.

## AI review checklist
- Did the AI suggest storing derived data as separate state? If yes, reject or explain why.
- Did it use React state instead of direct DOM manipulation?
- Did it recommend an effect for something that could be derived during render?
- Did it suggest an API, prop, or hook that does not exist? Verify against official React docs.
- Did it preserve the existing design and scope?

## Usage log (based on this work)
| Activity | AI contribution | My responsibility |
|---|---|---|
| Scope planning | Helped map curriculum requirements to portfolio features | Keep work limited to Weeks 1–5 and the original design |
| Design recreation | Used the supplied original portfolio source as the reference | Check visual sections/assets and compare in browser |
| State design | Suggested filter state, derived results, and reducer-managed form state | Understand state placement and action transitions; test behaviour |
| API feature | Suggested a GitHub public API integration and async UI states | Verify endpoint, error behaviour, and cleanup in DevTools |
| Documentation | Drafted evidence and test checklists | Complete tests honestly and correct anything inaccurate |

## Verification record — complete before presentation
- [ ] Compared React version with original portfolio at desktop width.
- [ ] Compared at mobile width and checked horizontal overflow.
- [ ] Tested all project category buttons and show-more control.
- [ ] Tested contact validation and form submission behaviour.
- [ ] Tested GitHub API loading, success, empty/error, and retry.
- [ ] Confirmed request cleanup with DevTools or by unmounting during a request.
- [ ] Ran `npm run lint`.
- [ ] Ran `npm run build`.
- [ ] Checked AI advice against React documentation and actual browser behaviour.

## Reflection prompts
Write your own short answers before presenting:
1. What did AI accelerate in this task?
2. Which AI suggestion did you change or reject, and why?
3. How did you verify the final implementation?
4. Which parts can you explain without AI?
