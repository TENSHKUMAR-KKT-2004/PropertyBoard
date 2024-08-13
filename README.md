# PropertyBoard

<p align="center">
  <img src="https://github.com/user-attachments/assets/411ab3de-87c9-4e0e-a928-8dce1b29d331" alt="logo" width="150" />
  <img src="https://github.com/user-attachments/assets/4d1ce84e-1562-4ea4-ba21-43efc90dafc7" alt="PropertyBoard" width="300" />
</p>

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
    cd frontend
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

![login-page](https://github.com/user-attachments/assets/7073fd35-f8f7-4f8d-852e-7a7dda70aee0)

### DashBoard

![dashboard](https://github.com/user-attachments/assets/57e64691-292e-4bd0-967f-5ead20b52c57)

![dashboard-light](https://github.com/user-attachments/assets/34fe5e2d-18be-493c-a053-678c2c624321)

### Properties

![properties](https://github.com/user-attachments/assets/2a6acddf-1c02-4200-8e43-74648ac95304)

![add-properties](https://github.com/user-attachments/assets/b51f23b5-7afd-4f71-b651-0dfacc5a259b)

![property-details](https://github.com/user-attachments/assets/ab27ae65-2e28-4d7e-b1d7-cb9d77408ea3)

### Agents

![agents](https://github.com/user-attachments/assets/76d7dc18-fad3-41f5-be7f-1cf15c579092)

![agent-profile](https://github.com/user-attachments/assets/39d7d28a-95dc-40c1-9955-e272c2f415c6)

### My Profile

![my-profile](https://github.com/user-attachments/assets/5095d70b-92ca-45a0-948e-483a1243a87d)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
