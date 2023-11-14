import '@/app/ui/global.css';
import { lusitana } from '@/app/ui/fonts';


export default function aboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${lusitana.className} antialiased `}>{children}</body>
            {/* Prop `className` did not match. Server: "__className_e66fe9 antialiased" Client: "__className_712214 antialiased */}
        </html>
    );
}
