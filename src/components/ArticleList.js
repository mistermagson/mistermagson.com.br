import ArticleItem from "./ArticleItem";

function ArticleList({articles}) {
    return (
        <>
            {articles.map((article) => (
                <div key={article.id} className={"row"}>
                    <ArticleItem  article={article}/>
                </div>)
            )}
        </>
    );
}

export default ArticleList;