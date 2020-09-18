import React, { FunctionComponent } from "react";
import styles from './NewsArticles.module.scss';


export const NewsArticle: FunctionComponent = () => {


    return (
        <section className={styles.newsContainer}>
            <h2 className={styles.title}>News</h2>
            <img className={styles.mainArticleImg} alt="" src="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" />
            <div>
                <div className={styles.buttonContainer}>
                    <button>News</button>
                    <button>Twitter</button>
                </div>
                <div className={styles.articlesContainer}>
                    <div className={styles.indivArticle}>
                        <img alt="" src="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG" />
                        <div>
                            <h4 className={styles.articleTitle}>Title</h4>
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <p>12 Oct 2020</p>
                        </div>
                        
                    </div>

                    <div className={styles.indivArticle}>
                        <img alt="" src="https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RLB_486265291EDR_F0481570RHAZ00323M_.JPG" />
                        <div>
                            <h4 className={styles.articleTitle}>Title</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <p>12 Oct 2020</p>
                        </div>
                    </div>

                    <div className={styles.indivArticle}>
                        <img alt="" src="https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RLB_486265291EDR_F0481570RHAZ00323M_.JPG" />
                        <div>
                            <h4 className={styles.articleTitle}>Title</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <p>12 Oct 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}