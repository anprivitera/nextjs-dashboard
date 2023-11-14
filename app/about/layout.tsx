import '@/app/ui/global.css';
import { lusitana } from '@/app/ui/fonts';


export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    function getDate() {
        return new Date().toLocaleDateString();
    }
    function GetTitle() {
        return (
            <h1>Daily post of { getDate() }</h1>
        );
    }
    return (

        <>
            <article>
                <GetTitle />
                <div className={`${lusitana.className} antialiased `}>{children}</div>
            </article>
            {/* No errors */}
        </>

    );
}
