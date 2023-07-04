# BenInKe
A blog app for sharing and reading stories, poems, and discussions.

# BenInKe
#### A three-in-one personal blog application with an elegant reader mode, generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4
### Author 
[Benson Langat](https://github.com/benie254)

### Description 
This blog app contains three modules, complete with CRUD functionalities. Standard users can read, like, comment, or share posts & can subscribe to a monthly newsletter or send email messages to the admin. Admin users can add, read, update, and delete posts, subscribers, and/or messages.

Standard users  | Admin users  | Technical features
------------------------ | ------------------------ | ------------------------
View all stories/poems  | Add/update/delete stories/poems  | Search tool & filter
View story/poem details  | View/delete comments/likes  | Loader
Read stories/poems  |  View/delete comment likes/replies  |  Notifier
Like/comment on poems/stories  |  View/delete subscribers  |  Error handling
Like/reply to comments  |  View/delete contacts/messages  |  Form validation
Subscribe to newsletter  |  Add/view/delete notifications  |  Email service
Contact admin  |   |  Lazy loading

## Screenshot #1
<img src="https://res.cloudinary.com/benie/image/upload/v1687865718/Screenshot_from_2023-06-27_14-32-08_wqyvgy.png">

## Screenshot #2
<img src="https://res.cloudinary.com/benie/image/upload/v1687866388/Screenshot_from_2023-06-27_14-38-10_q61kiw.png">

## Live Page: [BenInKe](https://janja.web.app/)

## Technologies Used

### Front-end development
* [Angular](https://angular.io/)- app structure, data collection, API requests, app management.
* CSS & [Bootstrap](https://getbootstrap.com/)- page styling & animations.
* [Firebase](https://firebase.com/)- deployment & hosting.
#### Packages
* [Angular Material](https://material.angular.io/)- UI design & themes.
* [NGX Pagination](https://www.npmjs.com/package/ngx-pagination/)- app pagination.
* [Notiflix](https://notiflix.github.io/)- loading & notifications.
### Back-end development
* [Click here for Back-end logic](https://github.com/benie254/BenInKe-Backend/)

## Other Resources Used 

* SiteIcon made with [Favicon](https://favicon.io). 
* Other app icons from [FontAwesome](https://fontawesome.com/)
* Stylized fonts from [Google Fonts](https://fonts.google.com/)
* Illustrations from [Paaatterns!](https://products.ls.graphics/paaatterns/)

## Behavior Driven Development (BDD)
**1. Landing Page**
   - OUTPUT: Navbar, Cards, Footer
   
**2. Home**
   - INPUT: Click: Navbar: 'Benie Writes'
   - OUTPUT: Home page content--similar to Landing Page
   
**3. Stories Module:** 
   - INPUT:  Click : Home: Card-Button : 'Go to Stories'
   - OUTPUT: Stories Navbar: 'The Stories Lib', 'Categories' (drop-down list), 'Genres' (drop-down list), 'Home', 'Go to' (drop-down list), 'Search'
   - OUTPUT: Pinned Story (with details), Ongoing Stories (featured), CTO (Library)
   - OUTPUT: Pinned Story/ Ongoing Stories: 'Cover', 'Title', 'Likes' count, 'Comments' count, 'Chapters' count, 'Status', 'Category', 'Genre'
   - INPUT:  Click: Pinned Story: story 'title' or 'cover' or 'CTO' (read)
   - OUTPUT: Redirect-to: Story preview page
   - INPUT:  Click: Ongoing Stories: story 'title' or 'cover'
   - OUTPUT: Redirect-to: Story preview page
   - INPUT:  Click: Pinned Story/ Ongoing Stories: 'Status'
   - OUTPUT: Redirect-to: Related stories page: Related by: Status
   - INPUT:  Click: Pinned Story/ Ongoing Stories: 'Category'
   - OUTPUT: Redirect-to: Related stories page: Related by: Category
   - INPUT:  Click: Pinned Story/ Ongoing Stories: 'Genre'
   - OUTPUT: Redirect-to: Related stories page: Related by: Genre
   
**4. Story Preview:**
   - INPUT:  Click : Story : 'Title' or 'Cover' or 'CTO' (read)
   - OUTPUT: Story preview page
   - OUTPUT: Sticky Buttons: 'Back', 'Toggle theme', 'Subscribe', 'Share'
   - OUTPUT: Story details: Story chapters
   - OUTPUT: Story details: 'Cover', 'Title', 'Likes' count, 'Comments' count, 'Chapters' count, 'Reading time', 'Status', 'Story description', 'Category', 'Genre'
   - OUTPUT: Story author, date published 
   - OUTPUT: CTO: 'Read'
   - OUTPUT: Forms: Like (with likes count), Follow (prompts dialog), Share (prompts dialog), Comment (with comments count)
   - OUTPUT: Comments count, Comments expansion panel
   - OUTPUT: Footer 
   - INPUT:  CTO: 'Read'
   - OUTPUT: Redirect-to: Read story page
   
**5. Story- Read:**
   - INPUT:  Click : Story details page: CTO : 'Read'
   - OUTPUT: Read story page
   - OUTPUT: Sticky Buttons: 'Back', 'Toggle theme', 'Subscribe', 'Share'
   - OUTPUT: Story reading stepper
   - OUTPUT: Story details: 'Title', 'Likes' count, 'Comments' count, 'Chapters' count, 'Reading time', 'Status', 'Story description', 'Category', 'Genre'
   - OUTPUT: Story author, date published 
   - OUTPUT: Story Cover
   - OUTPUT: Forms: Like (with likes count), Follow (prompts dialog), Share (prompts dialog), Comment (with comments count)
   - OUTPUT: Comments count, Comments expansion panel
   - OUTPUT: Footer 

**6. Stories Library:**
   - INPUT:  Click : Stories Home : CTO: Library
   - OUTPUT: Stories Navbar: 'The Stories Lib', 'Categories' (drop-down list), 'Genres' (drop-down list), 'Home', 'Go to' (drop-down list), Stories count
   - OUTPUT: Stories Library page
   - OUTPUT: Tabs: All Stories, Completed, Ongoing, Notifications
   - OUTPUT: Search input: 'Search anything...'
   - OUTPUT: Stories: 'Cover', 'Title', 'Status', 'Summary', 'CTO' (read)
   - OUTPUT: Pagination
   - OUTPUT: Footer
   - INPUT:  Click: Stories Navbar: 'The Stories Lib' or 'Home'
   - OUTPUT: Stories home page
   - INPUT:  Click: Stories Navbar: 'Categories' (drop-down list): 'Short Stories', 'Flash Fiction', 'Novelettes', 'Novels', 'Plays'
   - OUTPUT: Redirect-to: Related stories page: Related by: Category
   - INPUT:  Click: Stories Navbar: 'Genres' (drop-down list): 'Mystery', 'Thriller', 'Mystery/Thriller', 'Young Adult', 'Teen Fiction', 'Romance'
   - OUTPUT: Redirect-to: Related stories page: Related by: Genre
   - INPUT:  Click: Stories Navbar: 'Go to (drop-down list): Poems
   - OUTPUT: Redirect-to: Poems module
   - INPUT:  Click: Stories Navbar: 'Go to (drop-down list): Discussions
   - OUTPUT: Redirect-to: Discussions module

**7. Poems Module:**
   - INPUT:  Click: Stories Navbar: 'Go to (drop-down list): Poems or Click : Home: Card-Button : 'Go to Poems'
   - OUTPUT: Poems module
   - OUTPUT: Poems Navbar: 'The Poetry Hub', 'Categories' (drop-down list), 'Home', 'Go to' (drop-down list), Poems count
   - OUTPUT: Pinned Poem, Latest Poems, CTO, Footer
   - OUTPUT: Pinned Poem: 'Cover', 'Title', 'Date', 'Preview'
   - OUTPUT: Latest Poems: 'Cover', 'Title', 'Excerpt', 'Date', 'Author', 'Category'
   - INPUT:  Pinned/Latest Poems: Click: 'Cover' or 'Title'
   - OUTPUT: Redirect-to: Read poem page
   - INPUT:  Latest Poems: Click: 'Date'
   - OUTPUT: Redirect-to: Related poems page: Related by: Date posted
   - INPUT:  Latest Poems: Click: 'Author'
   - OUTPUT: Redirect-to: About page
   - INPUT:  Latest Poems: Click: 'Category'
   - OUTPUT: Redirect-to: Related poems page: Related by: Category
   - INPUT:  Click: CTO: 'more poems'
   - OUTPUT: Redirect-to: All poems page

**8. Poem- Read:**
   - INPUT:  Click : Poems Home : Poem 'title' or 'cover'
   - OUTPUT: Read poem page
   - OUTPUT: Sticky Buttons: 'Back', 'Toggle theme', 'Subscribe', 'Share'
   - OUTPUT: Poem details: 'Photo source', 'Cover', 'Title', 'Likes' count, 'Comments' count, 'Reading time' 'Content', 'Date', 'Author', 'Category'
   - OUTPUT: Forms: Like, Follow (prompts dialog), Share (prompts dialog), Comment
   - OUTPUT: Related Poems (2), Recent Posts (2)
   - OUTPUT: Comments count
   - OUTPUT: Comments expansion panel
   - OUTPUT: Search Forms: 'Search Poems By Date', 'Search anything...'
   - OUTPUT: Footer 

## Known Bugs

No known bugs. Please report any issues or bugs! 

## Support and contact details

You can reach me through [mail](mailto:davinci.monalissa@gmail.com) or [LinkedIn](https://www.linkedin.com/in/benson-langat-fullstack-developer)

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## License

Copyright (c) 2023 **[Benson Langat](https://github.com/benie254)**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*

Copyright (c) 2023 **[Benson Langat](https://github.com/benie254)**

[Angular CLI](https://github.com/angular/angular-cli) version 14.2.4