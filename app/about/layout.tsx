import '@/app/ui/global.css';
import { lusitana } from '@/app/ui/fonts';


export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (

        <>
            <h1 className={`${lusitana.className} antialiased `}>{children}</h1>
            {/* Uncaught Error: There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering. */}
        </>

    );
}
