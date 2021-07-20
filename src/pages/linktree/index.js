import {useRouter} from 'next/router'
import useSWR from 'swr'
import Perfil from "../../components/Perfil";


const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data
}

export default function Links() {
    const {query} = useRouter()
    const {data, error} = useSWR(
        `/api/links`,
        fetcher
    )

    if (error) return <div>{error.message}</div>
    if (!data) return <div>Carregando...</div>

    return (
        <>
            <div className='linktree'>
                {data.map((item) => (
                   <a href={item.url} className='linktree__item'>{item.title}</a>
                ))}
            </div>
        </>

    )
}