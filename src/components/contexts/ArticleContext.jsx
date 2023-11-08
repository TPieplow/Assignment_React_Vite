import { useContext, createContext, useState, useEffect } from "react";


const ArticleContext = createContext();
export const useArticlesContext = () => useContext(ArticleContext);

export const ArticleProvider = ({ children }) => {
    const apiUrlGet = "https://win23-assignment.azurewebsites.net/api/articles";

    const [articlesContext, setArticlesContext] = useState([]);
    const [articleContext, setArticleContext] = useState(null);
   

    //Create contact? 

    useEffect(() => {
        getArticles()
    }, [])

    const getArticles = async (limit) => {
        try {
            const result = await fetch(apiUrlGet)
            if (!result.ok) {
                throw new Error(`Server responded with status: ${result.status}`)
            }
            let articlesData = await result.json()
            if (limit) {
                articlesData = articlesData.slice(0, limit)
            }
            setArticlesContext(articlesData)
        } catch (error) {
            console.error("Failed to fetch articles:", error)
        }
    }


    const getArticle = async (id) => {
        try {
            const result = await fetch(`${apiUrlGet}/${id}`)
            if (!result.ok) {
                throw new Error(`Server responded with status: ${result.status}`)
            }
            const articleData = await result.json()
            setArticleContext(articleData)
        } catch (error) {
            console.error("Failed to fetch articles:", error)
        }
    }


    // const postContactForm = async (values) => {
    //     try {
    //         const result = await fetch (`${apiUrlPost}`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(values)
    //         })
    //         if (result.ok) {
    //             const formData = await result.json();
    //             setValidateForm(formData);
    //             //meddelande
    //         } else {
    //             const errorData = await result.text();
    //             console.error("Cant post form: ", result.status, errorData)
    //             //meddelande
    //         }
    //     } catch (error) {
    //         console.error("Couldnt post contact form: ", error)
    //         //meddelande
    //     }
    // }

    const clearArticles = () => {
        setArticlesContext([])
    }

    return (
        <ArticleContext.Provider value={{ articlesContext, getArticles, articleContext, getArticle, clearArticles }}>
            {children}
        </ArticleContext.Provider>
    )
}
