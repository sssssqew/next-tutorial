export default function SubIndex(){
    return (
        <>
            <h1>서브 홈페이지</h1>
            <a href={`${process.env.NEXT_PUBLIC_API_URL}`}>홈페이지</a>
        </>
    )
}