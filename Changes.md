# Changes

Here Described some changes I do in this challenge: 

- restructurised file structure:
	- assets moved to src
	- mockData.json moved to src/mocks
	- SearchViewModel moved to src/Composition
	- renamed folder service to services
- added some basic tests:
  - SearchViewModel.test.ts
  - Search.test.tsx
- Main changes: 
  - AppWrapper.tsx: interface for props
  - BackButton.tsx: made handler function for onClick event
  - ErrorBoundary.tsx: created class to handle default react errors in more details
  - AppContainer.tsx: added types + constants
  - SearchViewModel.ts: more types + select Item + lazy due to some issues with rendering
  - changed snap, due to wrong code??
  - Search.ts: types + moving functions into separate
  - ApiService.ts: interface add method
  - FormatList.ts: types
  - BootstrapApp.tsx: Added ErrorBoundary
  - getContainers.ts: not used currently
  - getTitle: some small functionality changes
  - withInstances.tsx: types
- removed unused imports

also I decided not to add typization with FC like: 

`const Home: React.FC = (): ReactElement => {`

just because 

`function Home(): ReactElement {`

is also ok and, but anyway I prefer 1 way
