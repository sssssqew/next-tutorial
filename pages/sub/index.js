export default function SubIndex(){
    console.log("환경변수: ", process.env.NEXT_PUBLIC_API_URL)
    return (
        <>
            <h1>서브 홈페이지</h1>
            <a href={`${process.env.NEXT_PUBLIC_API_URL}`}>홈페이지</a>
        </>
    )
}