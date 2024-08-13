# PropertyBoard

png

PropertyBoard is a full-stack application developed using the MERN stack along with the Refine framework. The platform provides a seamless experience for agents to manage their properties and provides a detailed dashboard for monitoring key metrics and statistics


## Features

- **Real-Estate Dashboard**: Provides an overview of key metrics such as Properties for sale, rent, total customers, properties across cities, and total revenue
- **Property Showcase**: Allows agents to display properties with detailed information and visual media. And they can add, edit, and view properties for sale and rent
- **Property Search with Pagination**: Enables efficient browsing of properties with pagination, improving the user experience
- **User Authentication**: Secure login using Google Auth
- **Interactive Charts and Graphs**: Visualize data with dynamic charts and graphs for better insights
- **Responsive Design**: Fully responsive design to work on various devices


## Tech Stack

- **Frontend**: 

    - **React.js**: A powerful JavaScript library for building user interfaces. And it allows to create a reusable UI components and manages the application's state efficiently
    - **Material-UI**: A popular React component library that provides a set of pre-designed components following Material Design principles
    - **Vite**: A modern build tool that provides fast development and build times. It uses native ES modules and provides instant hot module replacement (HMR), which enhances the development experience by reflecting changes in real time
    - **TypeScript**: A superset of JavaScript that adds static typing to the language

- **Backend**:

    - **Node.js**: JavaScript runtime for building scalable network applications
    - **Express**: A minimal and flexible Node.js web application framework for handling API requests and routing
    - **MongoDB**: NoSQL database for storing data
    - **Cloudinary**: For handling image uploads and storage
    - **Google Auth**: For user authentication and management

- **Framework**:

    - **Refine**: A Headless React based framework for building admin panels and internal tools


## How to Run

### Prerequisites

- [Node.js](https://nodejs.org/) (Version 18 or later)
- [MongoDB Atlas](https://www.postgresql.org/) (Config and get MongoDB Atlas Cloud Cluster access)
- [Cloudinary](https://cloudinary.com/) (Streamline media management and improve user experience by automatically delivering images and videos, enhanced and optimized for every user)
- [Google Cloud Console](https://firebase.google.com/) (Create a new project and enable Google Authentication and get client id)

### Setup Instructions

1. **Clone the Repository**

    ```bash
    git clone https://github.com/TENSHKUMAR-KKT-2004/PropertyBoard.git
    ```

2. **Navigate to the Project Directory**
    
    ```bash
    cd PropertyBoard
    ```

3. **Install Dependencies**

    ***For the frontend:***

    ```bash
    cd client
    npm install
    ```

    ***For the backend:***

    ```bash
    cd server
    npm install
    ```

4. **Configure Environment Variables**

    Create a `.env` file in the root directory and add the following variables. Replace the placeholders with your actual values

    ***In backend side:***

    ```env
    MONGODB_URL=your_mongoDB_atlas_connection_url
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    ```

    ***In frontend side:***

    ```env
    VITE_GOOGLE_CLIENT_ID=your_google_auth_url
    ```
    
5. **Start the Development Server to Run the Application**

    ***For the frontend:***

    ```bash
    npm run dev
    ```

    ***For the backend:***

    ```bash
    node server.js
    ```

Navigate to `http://localhost:5173` to view the application


## Screenshots

### Login Page


### DashBoard

### Properties


### Agents


### My Profile



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
