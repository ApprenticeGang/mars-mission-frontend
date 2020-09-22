import React, { FunctionComponent, useState, useEffect } from "react";
import styles from './NewsArticles.module.scss';

export interface Article {
    imageUrl?: string | undefined;
    title: string;
    articleUrl: string;
    summary?: string | undefined;
    publicationDate?: string | undefined;
}

interface NewsArticleProps {
    article: Article;
}

const fetchNewsArticles = async (): Promise<Article[]> => {

    return Promise.resolve([
        {
            imageUrl: "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
            title: "title",
            articleUrl: "articleUrl",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            publicationDate: "12 Oct 2020"
        }
    ]);
}

const NewsArticle: FunctionComponent<NewsArticleProps> = ({article}) => {
    return (
        <div className={styles.indivArticle}>
            <img className={styles.articleImg} alt="" src={article.imageUrl} />
            <div className={styles.articleInfo}>
                <h4 className={styles.articleTitle}>{article.title}</h4>
                <p className={styles.summary}>{article.summary}</p>
                <p className={styles.publicationDate}>{article.publicationDate}</p>
                <a className={styles.articleLink} href={article.articleUrl}>Read now</a>
            </div>
        
        </div>
    )
}

export const NewsArticles: FunctionComponent = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        fetchNewsArticles()
            .then(response => setArticles(response))
    }, [])

    const articleList = articles.map((article) => {
        return <NewsArticle article={article} />
    })

    return (
        <section className={styles.newsContainer}>
            <h2 className={styles.title}>News</h2>
            <img className={styles.mainArticleImg} alt="" src="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" />
            <div className={styles.articlesWrapper}>
                <div className={styles.buttonContainer}>
                    <button className={styles.btn}>News</button>
                    <button className={styles.btn}>Twitter</button>
                </div>
                <div className={styles.articlesContainer}>
                    {articleList}
                </div>
            </div>
        </section>
    );
}