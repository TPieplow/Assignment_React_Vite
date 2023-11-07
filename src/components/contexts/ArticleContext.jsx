import { useContext, createContext, useState, useEffect } from "react";


const ArticleContext = createContext();
export const useArticlesContext = () => useContext(ArticleContext);

export const ArticleProvider = ({ children }) => {
    const apiUrl = "https://win23-assignment.azurewebsites.net/api/articles"
    const [articlesContext, setArticlesContext] = useState([]);
    const [articleContext, setArticleContext] = useState(null);

    //Create contact? 

    useEffect(() => {
        getArticles()
    }, [])

    const getArticles = async () => {
        const result = await fetch(apiUrl)
        const articlesData = await result.json()
        console.log(articlesData)
        setArticlesContext(articlesData)
    }

    const getThreeArticles = async () => {
        const result = await fetch(apiUrl);
        const articlesData = await result.json();
        setArticleContext(articlesData.slice(0, 3));
    }

    const getArticle = async (id) => {
        const result = await fetch(`${apiUrl}/${id}`)
        const articleData = await result.json()
        setArticleContext(articleData)
    }

    const createArticle = async (articleContext) => {
        const result = await fetch(`${apiUrl}`, {
            method: 'post',
            headers: {
                'content_type': 'application.json'
            },
            body: JSON.stringify(product)
        })

        if (result.status === 201) {
            setArticleContext(await result.json())
        }
    }

    const clearArticles = () => {
        setArticlesContext(null)
    }

    return (
        <ArticleContext.Provider value={{ articlesContext, getArticles, articleContext, getArticle, clearArticles, getThreeArticles }}>
            {children}
        </ArticleContext.Provider>
    )
}
