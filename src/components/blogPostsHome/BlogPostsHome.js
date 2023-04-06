import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";

import Banner from "../banner/Banner";
import Preloader from "../preloader/Preloader";
import DownloadBanner from "../downloadBanner/DownloadBanner";
import BlogPostsList from "../blogPostsList/BlogPostsList";

import useLatestPosts from "../../hooks/useLatestPosts";

export default function BlogPostsHome({ posts, comments }) {
    const [dataLoaded, setDataLoaded] = useState(false);
    const { latest3Posts, latest6Posts } = useLatestPosts(posts);

    useEffect(() => {
        if (latest3Posts.length > 0) {
            setDataLoaded(true);
        }
    }, [latest3Posts]);

    return (
        <>
            {!dataLoaded && <Preloader />}

            {dataLoaded && (
                <>
                    <div className="main-banner header-text">
                        <div className="container-fluid">
                            <OwlCarousel
                                className="owl-theme"
                                margin={10}
                                rewind
                                autoplay
                                nav
                                dots="false"
                            >
                                {latest6Posts.map((lp) => (
                                    <Banner
                                        key={lp.id}
                                        {...lp}
                                        comments={comments}
                                    />
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                    <DownloadBanner />

                    <BlogPostsList
                        posts={latest3Posts}
                        latest3Posts={latest3Posts}
                        comments={comments}
                    />
                </>
            )}
        </>
    );
}
