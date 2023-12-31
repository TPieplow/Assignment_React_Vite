import { useContext, createContext, useState, useEffect } from "react";


const ArticleContext = createContext();
export const useArticlesContext = () => useContext(ArticleContext);

export const ArticleProvider = ({ children }) => {
    const apiUrlGet = "https://win23-assignment.azurewebsites.net/api/articles";
    const [articlesContext, setArticlesContext] = useState([]);
    const [articleContext, setArticleContext] = useState(null);

    useEffect(() => {
        getArticles()
    }, [])

    // Fetching from API, using a limit variable and slicing to get a chosen number of articles.
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

    // Fetching a single article given the id
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

    // Clear/refresh articles when redering the page 
    const clearArticles = () => {
        setArticlesContext([])
    }

    return (
        <ArticleContext.Provider value={{ articlesContext, getArticles, articleContext, getArticle, clearArticles }}>
            {children}
        </ArticleContext.Provider>
    )
}
