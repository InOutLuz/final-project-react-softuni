export default function InnerPageInformationBanner({ blogName, subtitle }) {
    return (
        <div className="heading-page header-text">
            <section className="page-heading">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-content">
                                <h4>{subtitle}</h4>
                                <h2>{blogName}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
