import ArticleItem from "./ArticleItem";

function ArticleList({articles}) {
    return (
        <div>
            {articles.map((article) => (
                <div className={"row"}>
                    <ArticleItem article={article}/>
                </div>)
            )}
        </div>
    );
}

export default ArticleList;