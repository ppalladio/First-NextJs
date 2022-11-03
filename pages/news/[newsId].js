import { useRouter } from 'next/router';

function DetailPage() {
    const route = useRouter();

    const newsId = route.query.newsId;

    return (
        <>
            <h1>{`the inputed path is ${newsId}`}</h1>
            <h1> extract dynamic page path </h1>;
        </>
    );
}

export default DetailPage;
