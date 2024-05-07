# Latest World News Website

Welcome to the Latest World News site

## Features

### User Authentication

- **Secure Login & Signup**: Users can log in or sign up through modal windows. Authentication is handled via a backend API with JWT tokens.
- **Token Refresh**: Automatic token refreshment upon expiration using the refresh token API, ensuring seamless user experience.
- **Persistent Authentication**: Redux Toolkit, Redux Persist, and local storage are used to handle user sessions and token management.

### News Navigation and Viewing

- **Protected Routes**: The News page, are protected. Unauthenticated users are prompted to log in if they attempt to access these routes.
- **Dynamic News Feed**: News articles are fetched from a backend API and displayed as cards on the News page. Each card shows a news title and an image, or a default Image if none is available.

### News Details

- **Detailed News Modals**: Clicking on the 'Details' button on any news card opens a modal with the full news article, including the title, country, detailed description, publication date, and a source URL. If the source icon is missing, a default url icon is used.
- **Scrollable Modals**: Long descriptions within the news details modals are scrollable, enhancing user experience.

### Additional Components

- **Carousel**: A carousel on the Homepage displays featured news images and headlines.
- **Footer**: A Footer component is included on each page, containing links and icons for additional resources or social media.

### Session and State Management

- **Automatic Token Refresh**: The system refreshes JWT tokens automatically, ensuring users remain logged in without session interruptions.
- **Sign-Out and Session Termination**:Users can log out via a sign-out button. They must re-authenticate to access protected content again.

### Usage

- **Navigation**: The navbar allows easy access to all sections of the site, with additional authentication modals for secure access.

- **Responsive Design**: The site is fully responsive, providing a seamless experience on both desktop and mobile devices.

## Getting Started

To get started with the World News Site:

1. Clone the repository to your local machine: <https://github.com/rifaiiaya2/reactjs-Vite-final-newsWeb>
2. Install dependencies with `npm install`.
3. Start the app with `npm run dev`
4. Deployment Link: https://latestworldnews.netlify.app/
