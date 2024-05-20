export default function About(){
    return (
        <>
            <h1>ABOUT 페이지</h1>
            <a href={`${process.env.NEXT_PUBLIC_API_URL}/`}>홈페이지</a>
        </>
    )
}