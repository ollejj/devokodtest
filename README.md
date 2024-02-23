# Coding test for Devoteam | Movie search

If you don't have `node` already, download and install it here: https://nodejs.org/en/download

#### Getting started

First you need to install the dependencies:
`npm run install`
Second run the dev server:
`npm run dev`
To run tests:
`npm run test`

## Developer notes

#### Testing

I was not able to create any more unit tests since React is a bit tricky to test for apart
from if a component has rendered or not and I don't have any heavy logic functions other than hooks.

In the suite you will find an commented-out testcase to test the useQuery hook that I did not manage to finish.

#### Errors

I wasn't able to implement proper error handling for the fetches and user inputs.

#### Improvements

Some improvements I wish I had more time to implement:

- More test cases
- Responsive UI
- Save query state in URL, making searches sharable through links (eg. /?q=finding+nemo)
