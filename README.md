# Chef Claude

This is my first React Project that utilizes Claude AI API. When given a list of ingredients the site will forward such to Claude and the AI will return a recipe given the provided ingredients

![EEG Band Discovery](/src/assets/ChefClaude.png)

## Running Application

To run the application you will need to:
- Clone this repository
- Have NPM installed and create Vite project.
- Setup and Retrieve an API key from Claude AI. 
- Create a ```.env.local``` file to house the API key.
- Add the variable ```VITE_REACT_APP_ANTHROPIC_API_KEY="your key"```
- Run ```npm run dev```