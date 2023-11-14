export default function About() {
    function getDate() {
        return new Date().toLocaleDateString();
    }
    return (
        <>
            <h1>Welcome! Today is {getDate()}</h1>
            {/* Hydration failed because the initial UI does not match what was rendered on the server.

            Warning: Expected server HTML to contain a matching <h1> in <h1>.

            ee more info here: https://nextjs.org/docs/messages/react-hydration-error */}
        </>
    )
}