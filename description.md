# Films-4U

1. Choose a public API to tinker with and I decided to go with [TMDb](https://www.themoviedb.org/documentation/api)
2. Let's start with our first component - [the Header](https://github.com/MarinaKam/films-4u/commit/a22f99f0fc1160a3b91b0a6f4201c4094585c3ed). A simple stateless component with the logo of our app, without search bar and login/avatar area :)
3. Now, let's deploy with a [Firebase](https://firebase.google.com/?authuser=0) and check the app.
4. Let's build the [Search Bar](https://github.com/MarinaKam/films-4u/commit/5148c5341960d7117b0d1f96a37a2302a0f27938). Unlike the Header this one a container component. I'm not working with API yet, I'll just console.log the value.
5. Next step is the [SideBar component](https://github.com/MarinaKam/films-4u/commit/72e6ff251a23e7fc082a171a8db45f9a2cba80ae), which will allow the users to navigate through the app. It's still static for now.
6. In the Safari and Firefox `onBlur` function doesn't work and I added ``ref`` into [the menu button](https://github.com/MarinaKam/films-4u/commit/dbbe167f8eeeb17fd72a2f26faedcee61df05850)
7. Now, finally I want focus on the API. To use it, I had to [signup](https://www.themoviedb.org/account/signup) for an account
   at TMDb and [request an API key](https://developers.themoviedb.org/3/getting-started/introduction).
    
8. We can now use the `<Main />` component multiple times by passing different properties. The only issue is that we now have 3 lists of movies on the same page.
9. I'm STUCK on SearchBar with API, can't redirect to the search result page :(
10. Update. Changed `<Main />` and `<SearchResult />` into the stateless component. All data search and download management has returned into the `<App />`
11. Add async into handleSubmit function in the SearchBar.js 