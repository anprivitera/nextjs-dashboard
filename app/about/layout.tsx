import '@/app/ui/global.css';
import { lusitana } from '@/app/ui/fonts';


export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (

        <>
            <div className={`${lusitana.className} antialiased `}>{children}</div>
            {/* No errors */}
        </>

    );
}
