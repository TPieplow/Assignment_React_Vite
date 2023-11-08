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

    const getArticles = async (limit) => {
        try {
            const result = await fetch(apiUrl)
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
            const result = await fetch(`${apiUrl}/${id}`)
            if (!result.ok) {
                throw new Error(`Server responded with status: ${result.status}`)
            }
            const articleData = await result.json()
            setArticleContext(articleData)
        } catch (error) {
            console.error("Failed to fetch articles:", error)
        }
    }

    const createArticle = async (articleContext) => {
        const result = await fetch(`${apiUrl}`, {
            method: 'post',
            headers: {
                'Content_Type': 'application.json'
            },
            body: JSON.stringify(product)
        })

        if (result.status === 201) {
            setArticleContext(await result.json())
        }
    }

    const clearArticles = () => {
        setArticlesContext([])
    }

    return (
        <ArticleContext.Provider value={{ articlesContext, getArticles, articleContext, getArticle, clearArticles }}>
            {children}
        </ArticleContext.Provider>
    )
}
