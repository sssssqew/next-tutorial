import { useRouter } from 'next/router'

export default function About(){
    const router = useRouter()
    const id = Number(router.query.id)
    return (
        <>
            <h1>상세 페이지 ({id})</h1>
            <a href={`/`}>홈페이지</a>
        </>
    )
}