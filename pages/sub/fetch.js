import { useEffect, useState } from "react"

export default function Fetch(){
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL +'api/hello')
        .then(res => res.json())
        .then(result => {
            console.log(result)
            setData(result)
        })
    }, [])
    return (
        <>
            <h1>fetch 페이지</h1>
            <p>서버 데이터: {data?.name}</p>
            <a href='/'>홈페이지</a>
        </>
    )
}