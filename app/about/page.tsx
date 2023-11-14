export default function About() {
    function getDate() {
        return new Date().toLocaleDateString();
    }
    return (
        <>
            <h1>Welcome! Today is {getDate()}</h1>
            <h2>Here are some links to get you started:</h2>
        </>
    )
}