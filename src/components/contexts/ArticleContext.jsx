import { useContext, createContext, useState, useEffect } from "react";


const ArticleContext = createContext();
export const useArticles = () => useContext(ArticleContext);

export const ArticleProvider = ({ children }) => {
    const apiUrl = "https://win23-assignment.azurewebsites.net/api/articles"
    const [articles, setArticles] = useState([]);
    const [article, setArticle] = useState([]);

    //Create contact? 

    useEffect(() => {
        getArticles()
    }, [])

    const getArticles = async () => {
        const result = await fetch(apiUrl)
        const articlesData = await result.json()
        setArticles(articlesData)
    }

    const getArticle = async (id) => {
        const result = await fetch(`${apiUrl}/${id}`)
        const articleData = await result.json()
        setArticles(articleData)
    }

    const clearArticles = () => {
        setArticles(null)
    }

    return (
        <ArticleContext.Provider value={{articles, getArticles, article, getArticle, clearArticles}}>
            {children}
        </ArticleContext.Provider>
    )
}
