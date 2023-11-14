export default function About() {
    function getDate() {
        return new Date().toLocaleDateString();
    }
    return (
        <>
            <article>
                <h1>Daily post of {getDate()}</h1>
                <div>Welcome! Today is a beautiful day</div>
                {/* No errors */}
            </article>
        </>
    )
}