import React, { FunctionComponent, useState, useEffect } from "react";
import styles from './NewsArticles.module.scss';

export interface Article{
    imageUrl?: string | undefined;
    title?: string;
    articleUrl?: string;
    summary?: string | undefined;
    publishDate?: string | undefined;
}

interface NewsArticleProps {
    article: Article;
}

export const fetchNewsArticles = async (): Promise<Article[]> => {
        return fetch("https://mars-mission-backend.herokuapp.com/api/articles")
        .then(response => response.json())
        .then(data => data as Article[])
     };

const NewsArticle: FunctionComponent<NewsArticleProps> = ({article}) => {
    return (
        <div className={styles.indivArticle}>
            <img className={styles.articleImg} alt="" src={article.imageUrl} />
            <div className={styles.articleInfo}>
                <h4 className={styles.articleTitle}>{article.title}</h4>
                <p className={styles.summary}>{article.summary}</p>
                <p className={styles.publicationDate}>{article.publishDate}</p>
                <a className={styles.articleLink} href={article.articleUrl}>Read now</a>
            </div>
        
        </div>
    )
}

export const NewsArticles: FunctionComponent = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
     void fetchNewsArticles()
            .then(response => setArticles(response))
    }, []);

    const articleList = articles.map((article) => {
        return <NewsArticle article={article} />
    })

    return (
        <section className={styles.newsContainer}>
            <h2 className={styles.title}>News</h2>
            <div className={styles.articlesWrapper}>
                <div className={styles.titleContainer}>
                    <h3 className="newsTitle">Articles</h3>
                </div>
                <div className={styles.articlesContainer}>
                    {articleList}
                </div>
            </div>
        </section>
    );
}
