import Link from 'next/link';

const Index = () => (
    <div>
        <h1> SSR Testing Next </h1>
        <Link href='/about'>
            <a>About</a>
        </Link>

        <Link href='/robots'>
            <a>Robots</a>
        </Link>
        {/* <a href="./about">About page</a> */}
    </div>
);

export default Index;