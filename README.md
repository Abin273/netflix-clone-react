# Netflix

It is an application similar to netflix. It utilizes **TMDB api** for movies listing and **openai api** for movies search suggestion.

## Installation

1. Clone the repository

   ```
   git clone https://github.com/iam-abin/netflix-clone-react.git
   ```

2. Navigate to the project directory

   ```
   cd netflix-clone-react
   ```

3. Install the dependencies

   ```
   npm install 
   ```

4. Set up the required environment variables. Rename the `.env.example` file to `.env` and provide the necessary values for your environment

5. Start the development server

   ```
   npm start
   ```
   
# Images
![Screenshot from 2024-07-24 13-15-02](https://github.com/user-attachments/assets/2be25934-eb7e-42ff-b7f8-bbef02b91072)
![Screenshot from 2024-07-24 13-01-14](https://github.com/user-attachments/assets/2653a23f-b7dd-47c0-9255-d5b749587c81)
![Screenshot from 2024-07-24 13-28-16](https://github.com/user-attachments/assets/9460d18c-c518-477d-ab82-9c55d6ba7c48)

## Features
- Login/Sign Up
    - Sign In /Sign up Form
    - redirect to Browse Page
- Browse (after authentication)
    - Header
    - Main Movie
        - Tailer in Background
        - Title & Description
        - MovieSuggestions
            - MovieLists * N 
- NetflixGPT
    - Search Bar
    - Movie Suggestions

# Things did

- Create React App
- Configured TailwindCSS 
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account
- Implement Sign In user Api
- Created Redux Store with userSlice
- Implemented Sign out 
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
- Unsubscibed to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Regiter TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContauiner & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Yotube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary Component
- Build Movie List
- build Movie Card
- TMDB Image CDN URL
- Made the Browsre page amazing with Tailwind CSS
- usePopularMovies Custom hook
- GPT Search Page
- GPT Search Bar
- (BONUS) Multi-language Feature in our App)
- Get Open AI Api Key 
- Gpt Search API Call
- fetched gptMoviesSuggestions from TMDB
- created gptSlice added data
- Resused Movie List component to make movie suggestion container
- Memoization
- Added .env file
- Adding .env file to gitignore
- Made our Site Responsive
