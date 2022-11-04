// domain/news
import Link from 'next/link';
function NewsPage() {
    return (
        <>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href="/news/news1">news item 1</Link>
                    {/* //'use Link to prevent browser default to send http request, still a SPA  */}
                </li>
                <li>
                    <Link href="/news/news2">news item 2</Link>
                </li>
            </ul>
        </>
    );
}

export default NewsPage;
