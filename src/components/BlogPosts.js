import { useState } from "react";
import Banner from "./Banner";
import Preloader from "./Preloader";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import DownloadBanner from "./DownloadBanner";
import BlogPostsAll from "./BlogPostsAll";
import useLatestPosts from "../components/hooks/useLatestPosts";
import { useEffect } from "react";

export default function BlogPosts({ posts }) {
    const [dataLoaded, setDataLoaded] = useState(false);
    const { latest3Posts, latest6Posts } = useLatestPosts(posts);

    // Check if all data has been loaded
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
                        <div className="container-fluid"></div>
                    </div>
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        margin={10}
                        autoplay
                        nav
                        dots="false"
                    >
                        {latest6Posts.map((lp) => (
                            <Banner key={lp.id} {...lp} />
                        ))}
                    </OwlCarousel>

                    <DownloadBanner />

                    <BlogPostsAll
                        posts={latest3Posts}
                        latest3Posts={latest3Posts}
                    />
                </>
            )}
        </>
    );
}
