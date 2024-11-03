# Healthcare Management System
This project is a comprehensive Healthcare Management System designed to streamline patient care and hospital management using a range of integrated features. Built with a focus on API integration, data security, and user experience, this system enables users to locate nearby hospitals, access health records, manage health data, and schedule appointments.

# Features
Nearby Hospital Locator
Tracks and displays nearby hospitals on an interactive map based on the user’s current location, providing details like the hospital’s name, address, and contact info.

User Login and Health Data Storage
Users can create accounts, log in securely, and store their health details gathered from various healthcare providers. Users can also update and manage their health data over time.

Access to Health Records
Provides users access to their health records, including medical history, prescriptions, lab results, etc. Data is aggregated from multiple healthcare providers.

Appointment Scheduling
Enables users to book, reschedule, or cancel appointments with healthcare providers, showing available slots and handling user preferences.

# Tech Stack
Frontend:
React for building interactive user interfaces.
Material UI for a responsive and professional design.
Redux or Zustand for managing global state.

Backend:
Node.js and Express for handling API requests and server logic.
MongoDB for dynamic health data storage.
Firebase Authentication for secure user login and data protection.

APIs:
Google Maps API for locating nearby hospitals and displaying maps.
FHIR API for health record integration.
Zocdoc API (or similar) for scheduling and appointment management.

Tools:
Postman for API testing and automation.
AWS Lambda or Firebase Functions for serverless backend functions.

API Integrations
This project integrates with multiple external APIs to provide comprehensive functionality:
Google Maps API: For mapping and hospital location data.
FHIR API: For accessing electronic health records.
Zocdoc API: For scheduling and managing appointments with healthcare providers.

## Getting Started

To get a local copy up and running, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/bits-pilani-API-hackathon.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd bits-pilani-API-hackathon
    ```
3. **Install dependencies:**
    ```bash
    npm install
    ```
4. **Install dependencies(for tailwind setup):**
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    ```

4. **Run the development server:**
    ```bash
    npm run dev
    
## Contributing

We welcome contributions from the community. To ensure a smooth process, please follow these guidelines:

1. *Fork the repository* and create your branch from main.
2. *Commit your changes* with clear and descriptive messages.
3. *Push to your branch* and create a pull request.
4. Ensure your code *adheres to the project's coding standards* and passes all tests.
