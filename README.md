# Frontend - JavaScript assignment with React utilizing Vite

## Description
- This application is a part of my edjucational journey toward becoming a fullstack .NET developer. It constitutes the second assignment in the program and has been entirely devoloped in React, utilizing Vite. 

## Installation
```bash
npm install
```

## Usage
- To start the application, use the following command:
```bash
npm run dev
```
- This will launch the application in development server.

## Technologies used
- **Form Handling:** Using [Formik](https://formik.org) for efficient and easy form management.
- **Validation:** Utilizes [Yup](https://github.com/jquense/yup) with regex for form validation, ensuring data integrety.
- **User Feedback:** Implements [Toastify](https://fkhadra.github.io/react-toastify) to provide appealing notifications for the user.

## Features

- **Integrations:** Integrates with an external API to fetch articles
- **Contact Form:** USers can submit their contact details and a message through the application, utilizing an API for processing

- I opted to create my own verison of the carousel instead of using a component carousel from npm. It's not as fancy, but atleast I made it myself.

```javascript
    useEffect(() => {
        if (articlesContext) {
            setVisibleArticles(articlesContext.slice(0, articlesToShow));
            if (articlesContext.length <= maxArticles) {
                setButtonText('More Articles');
            }
        }
    }, [articlesContext]);

    const loadMoreArticles = () => {
        setLoading(true);
        const remainingArticles = articlesContext.slice(visibleArticles.length, maxArticles);
        const incomingArticles = remainingArticles.slice(0, articlesToShow);
        setVisibleArticles(prevVisibleArticles => [...prevVisibleArticles, ...incomingArticles]);

        if (visibleArticles.length + articlesToShow >= maxArticles) {
            setButtonText('Show Less');
        }
        setLoading(false);
    };

    const handleShowLess = () => {
        setVisibleArticles(articlesContext.slice(0, articlesToShow));
        setButtonText('More Articles');
        setShowLessClicked(true);
    };
```

## Learnings and Challenges

### What I Found Easy
- Implementing the external API integration was rather easy due to the well structures schema.
- Styling components using SCSS simplified the process.

### What I Found Challenging
- Creating the replacement for the carousel was really challenging, unlike typical React component structures, this required some abstract and problem solving thinking. It was not a straight forward "lego-building" process, but rather an exercise in thinking like a programmer.  
- Form validation with regex and Yup requiered some experimentation to get it right.

### What I Learned
- Working with React and Vite
- The importance of using dev tools.
- Well-structured components.
- Using hooks to manage state in a React application. 