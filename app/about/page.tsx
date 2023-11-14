export default function About() {
    function getDate() {
        return new Date().toLocaleDateString();
    }
    return (
        <>
            <div>Welcome! Today is {getDate()}</div>
            {/* No errors */}
        </>
    )
}