export default function SubIndex(){
    console.log("환경변수: ", process.env.PRODUCTION_URL )
    return (
        <>
            <h1>서브 홈페이지</h1>
            <a href='/'>홈페이지</a>
        </>
    )
}