import '@/app/ui/global.css';
import { lusitana } from '@/app/ui/fonts';


export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (

        <>
        <article>
            <h1></h1>
            <div className={`${lusitana.className} antialiased `}>{children}</div>
        </article>
            {/* No errors */}
        </>

    );
}
