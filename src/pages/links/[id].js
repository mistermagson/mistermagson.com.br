import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data
}

export default function Link() {
    const { query } = useRouter()
    const { data, error } = useSWR(
        () => query.id && `/api/links/${query.id}`,
        fetcher
    )

    if (error) return <div>{error.message}</div>
    if (!data) return <div>Carregando...</div>

    return (
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Titulo</th>
                <th>URL</th>
                <th>Ordem</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.url}</td>
                <td>{data.order}</td>
            </tr>
            </tbody>
        </table>
    )
}