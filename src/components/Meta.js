import Head from "next/head";

function Meta({title,keywords, description}) {
    return (
        <Head>
            <meta name='title' content={title}/>
            <meta name='keywords' content={keywords}/>
            <meta name='description' content={description}/>

        </Head>
    );
}

Meta.defaultProps = {
    title: 'Mister Magson',
    keywords: 'Programação, Tecnologia, Desenvolvimento de Aplicativos',
    description: 'Descrição'
}

export default Meta;