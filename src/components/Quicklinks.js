import { server } from '../config';


export default function Quicklinks(props) {

    return (
        <div>
            <h1>Quicklinks</h1>
            <p> {JSON.stringify(props.links)} </p>

        </div>

    )
}

export const getStaticProps = async () => {
    // const response = await fetch(`http://localhost:3333/episodes`)
    const response = await fetch(`${server}/api/links`)
    const data = await response.json()

    if (!data) {
        return {
            notFound: true,
        }
    }
    console.log(data)

    return {
        props: {
            links: { data }
        },
        revalidate: 1000
    }
}
