# Personal Portfolio

This is a personal portfolio website project that showcases your skills, projects, and experiences. The portfolio is built using modern web technologies and is designed to be responsive, accessible, and easy to customize.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Customization](#customization)
- [Email Setup](#email-setup)
- [License](#license)
- [Contact](#contact)

## Demo

You can view a live demo of the portfolio [here](#).

## Features

- Responsive design for mobile and desktop.
- Interactive UI with smooth transitions.
- Sections for skills, projects, experience, and contact information.
- Dynamic content loading.
- SEO-friendly structure.
- Easy to customize and extend.

## Installation

To get started with this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/chakradhar-grandhi/personal-portfolio.git
   cd personal-portfolio
    ```

2. **Install dependencies**:

If you are using npm:

```bash

npm install
```
Or, if you prefer yarn:

```bash
yarn install
```
3. **Start the development server**:

```bash
npm start
```
or

```bash
yarn start
```
The portfolio will be available at http://localhost:3000.

## Usage
Once the project is set up, you can start customizing it according to your needs:

Modify the content in the src/pages/ directory to reflect your skills, projects, and experience.
Update the styles in the src/app/ directory to match your personal branding.
Add or remove sections as needed by editing the src/app/routes.js file.
Project Structure
Here is a brief overview of the project structure:

```csharp
personal-portfolio/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── App.css
│   │   ├── App.js
│   │   └── routes.js
│   ├── assets/
│   │   └── images/
│   ├── components/
│   ├── pages/
│   ├── index.js
│   ├── index.css
│   ├── email.js
│   └── ...
├── .gitignore
├── package.json
├── yarn.lock
└── README.md
```
## Technologies Used

This portfolio is built using the following technologies:

- **React** - A JavaScript library for building user interfaces.
- **CSS** - For styling the components.
- **HTML** - The backbone of the web pages.
- **JavaScript** - The scripting language used for dynamic content and interactions.
## Customization
To customize the portfolio:

1. **Content**: Update the text and images in the src/pages/ directory to reflect your personal information.
2. **Styles**: Modify the CSS files in the src/app/ and src/components/ directories to change the look and feel.
3. **SEO**: Update the public/index.html file to include your meta descriptions and keywords.
4. **Profile Information**: Update your profile information in src/content_option.js file.

## Email Setup
To enable the contact form functionality, you need to set up your email service by adding your user keys in the email.js file:

1. **Open the content_option file**: Navigate to src/content_option.js.
2. **Add your email service keys**: Replace the placeholder values with your actual keys and configurations.
3. **Test the contact form**: Ensure the contact form works correctly by sending a test message.
This step is crucial for the contact form to function properly.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
