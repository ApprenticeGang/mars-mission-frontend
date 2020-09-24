import React, { FunctionComponent, useState, useEffect } from "react";
import styles from './NewsArticles.module.scss';

export interface Article {
    image_url?: string | undefined;
    title?: string;
    article_url?: string;
    summary?: string | undefined;
    publish_date?: string | undefined;
}

interface NewsArticleProps {
    article: Article;
}

export const fetchNewsArticles = async (): Promise<Article[]> => {

        return fetch("https://mars-mission-backend.herokuapp.com/api/articles")
        .then(response => response.json())
     };

const NewsArticle: FunctionComponent<NewsArticleProps> = ({article}) => {
    return (
        <div className={styles.indivArticle}>
            <img className={styles.articleImg} alt="" src={article.image_url} />
            <div className={styles.articleInfo}>
                <h4 className={styles.articleTitle}>{article.title}</h4>
                <p className={styles.summary}>{article.summary}</p>
                <p className={styles.publicationDate}>{article.publish_date}</p>
                <a className={styles.articleLink} href={article.article_url}>Read now</a>
            </div>
        
        </div>
    )
}

export const NewsArticles: FunctionComponent = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        fetchNewsArticles()
            .then(response => setArticles(response))
    }, []);

    console.log(fetchNewsArticles());

    const articleList = articles.map((article) => {
        return <NewsArticle article={article} />
    })

    return (
        <section className={styles.newsContainer}>
            <h2 className={styles.title}>News</h2>
            <img className={styles.mainArticleImg} alt="" src="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" />
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
