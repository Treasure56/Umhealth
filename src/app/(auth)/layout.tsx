export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section className="bg-[url(/images/side-image.png)] bg-no-repeat [background-size:400px] bg-left-bottom">
            <div className="h-2"></div>
            {children}
        </section>
    );
}