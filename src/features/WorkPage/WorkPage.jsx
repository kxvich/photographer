import styles from "../WorkPage/WorkPage.module.scss";
import MobileNav from "../MobileNav/MobileNav";
import DesktopNav from "../DesktopNav/DesktopNav";
import WorkTitle from "./WorkTitle";
import WorkPagePictures from "./WorkPagePictures";
import useMediaQuery from "../../Hooks/useMediaQuery";
import SideBar from "../SideBar/SideBar";
import { useContext, useState,useEffect } from "react";
import { AppContext } from "../../App";

const work1Images = [
	{ url: "images/work1/image1.webp", title: "SMJ X DAVIDO" },
	{ url: "images/work1/image2.webp", title: "SMJ X DAVIDO" },
	{ url: "images/work1/image3.webp", title: "SMJ X DAVIDO" },
	{ url: "images/work1/image4.webp", title: "SMJ X DAVIDO" },
	{ url: "images/work1/image5.webp", title: "SMJ X DAVIDO" },
];

const work2Images = [
	{ url: "images/work2/image1.webp", title: "SMJ X TIWA SAVAGE" },
	{ url: "images/work2/image2.webp", title: "SMJ X TIWA SAVAGE" },
	{ url: "images/work2/image3.webp", title: "SMJ X TIWA SAVAGE" },
	{ url: "images/work2/image4.webp", title: "SMJ X TIWA SAVAGE" },
	{ url: "images/work2/image5.webp", title: "SMJ X TIWA SAVAGE" },
];

const work3Images = [
	{ url: "images/work3/image1.webp", title: "SMJ X RODDY RICH" },
	{ url: "images/work3/image2.webp", title: "SMJ X RODDY RICH" },
	{ url: "images/work3/image3.webp", title: "SMJ X RODDY RICH" },
	{ url: "images/work3/image4.webp", title: "SMJ X RODDY RICH" },
	{ url: "images/work3/image5.webp", title: "SMJ X RODDY RICH" },
];

const work4Images = [
	{ url: "images/work4/image1.webp", title: "SMJ X POCOLEE" },
	{ url: "images/work4/image2.webp", title: "SMJ X POCOLEE" },
	{ url: "images/work4/image3.webp", title: "SMJ X POCOLEE" },
	{ url: "images/work4/image4.webp", title: "SMJ X POCOLEE" },
];

const work5Images = [
	{ url: "images/work5/image1.webp", title: "WEDDINGS " },
	{ url: "images/work5/image2.webp", title: "WEDDINGS " },
	{ url: "images/work5/image3.webp", title: "WEDDINGS " },
	{ url: "images/work5/image4.webp", title: "WEDDINGS " },
	{ url: "images/work5/image5.webp", title: "WEDDINGS " },
];

const work6Images = [
	{ url: "images/work6/image1.webp", title: "SMJ X YOUNG JONN " },
	{ url: "images/work6/image2.webp", title: "SMJ X YOUNG JONN " },
	{ url: "images/work6/image3.webp", title: "SMJ X YOUNG JONN " },
	{ url: "images/work6/image4.webp", title: "SMJ X YOUNG JONN " },
	{ url: "images/work6/image5.webp", title: "SMJ X YOUNG JONN " },
];

const work7Images = [
	{ url: "images/work7/image1.webp", title: "SMJ X DON JAZZY " },
	{ url: "images/work7/image2.webp", title: "SMJ X DON JAZZY " },
	{ url: "images/work7/image3.webp", title: "SMJ X DON JAZZY " },
];

const work8Images = [
	{ url: "images/work8/image1.webp", title: "SMJ X ADEKUNLE GOLD " },
	{ url: "images/work8/image2.webp", title: "SMJ X ADEKUNLE GOLD " },
	{ url: "images/work8/image3.webp", title: "SMJ X ADEKUNLE GOLD " },
	{ url: "images/work8/image4.webp", title: "SMJ X ADEKUNLE GOLD " },
	{ url: "images/work8/image5.webp", title: "SMJ X ADEKUNLE GOLD " },
];

const work9Images = [
	{ url: "images/work9/image1.webp", title: "SMJ X  REMA " },
	{ url: "images/work9/image2.webp", title: "SMJ X  REMA " },
	{ url: "images/work9/image3.webp", title: "SMJ X  REMA " },
	{ url: "images/work9/image4.webp", title: "SMJ X  REMA " },
	{ url: "images/work9/image5.webp", title: "SMJ X  REMA " },
];

const work10Images = [
	{ url: "images/work10/image2.webp", title: "SMJ X  SHALLIPOPI " },
	{ url: "images/work10/image3.webp", title: "SMJ X  SHALLIPOPI " },
	{ url: "images/work10/image4.webp", title: "SMJ X  SHALLIPOPI " },
	{ url: "images/work10/image5.webp", title: "SMJ X  SHALLIPOPI " },
];

const work11Images = [
	{ url: "images/work11/image1.webp", title: "SMJ X  FALZ " },
	{ url: "images/work11/image2.webp", title: "SMJ X  FALZ " },
	{ url: "images/work11/image3.webp", title: "SMJ X  FALZ " },
	{ url: "images/work11/image4.webp", title: "SMJ X  FALZ " },
	{ url: "images/work11/image5.webp", title: "SMJ X  FALZ " },
];

const work12Images = [
	{ url: "images/work12/image1.webp", title: "SMJ X  VICTONY " },
	{ url: "images/work12/image2.webp", title: "SMJ X  VICTONY " },
	{ url: "images/work12/image3.webp", title: "SMJ X  VICTONY " },
	{ url: "images/work12/image4.webp", title: "SMJ X  VICTONY " },
	{ url: "images/work12/image5.webp", title: "SMJ X  VICTONY " },
];

const work13Images = [
	{ url: "images/work13/image1.webp", title: "SMJ X  REMINISCE " },
	{ url: "images/work13/image2.webp", title: "SMJ X  REMINISCE " },
	{ url: "images/work13/image3.webp", title: "SMJ X  REMINISCE " },
	{ url: "images/work13/image4.webp", title: "SMJ X  REMINISCE " },
	{ url: "images/work13/image5.webp", title: "SMJ X  REMINISCE " },
];

const work14Images = [
	{ url: "images/work14/image1.webp", title: "SMJ X  TIMINI " },
	{ url: "images/work14/image2.webp", title: "SMJ X  TIMINI " },
	{ url: "images/work14/image3.webp", title: "SMJ X  TIMINI " },
	{ url: "images/work14/image4.webp", title: "SMJ X  TIMINI " },
	{ url: "images/work14/image5.webp", title: "SMJ X  TIMINI " },
];

const work15Images = [
	{ url: "images/work15/image1.webp", title: "SMJ X ZLATAN" },
	{ url: "images/work15/image2.webp", title: "SMJ X ZLATAN" },
	{ url: "images/work15/image3.webp", title: "SMJ X ZLATAN" },
	{ url: "images/work15/image4.webp", title: "SMJ X ZLATAN" },
	{ url: "images/work15/image5.webp", title: "SMJ X ZLATAN" },
];

const imagesGroup = [
	work1Images,
	work2Images,
	work3Images,
	work4Images,
	work5Images,
	work6Images,
	work7Images,
	work8Images,
	work9Images,
	work10Images,
	work11Images,
	work12Images,
	work13Images,
	work14Images,
	work15Images,

];

function WorkPage() {
	// const { isOpen, selectedId } = useContext(AppContext);
	// console.log(selectedId)
	// const isDesktop = useMediaQuery("(min-width: 960px)");
	// // const isMobile = useMediaQuery("(max-width: 500px)")
	
	// return (
	// 	<div className={styles.workPage}>
	// 		{isDesktop ? <DesktopNav /> : <MobileNav />}
	// 		{isDesktop ? (
	// 			<WorkTitle title={imagesGroup.at(selectedId - 1).at(0).title} />
	// 		) : (
	// 			""
	// 		)}
	// 		{isOpen && <SideBar />}
	// 		<WorkPagePictures images={imagesGroup.at(selectedId - 1)} />
	// 	</div>
	// );
	const { isOpen, selectedId } = useContext(AppContext);
    const [loading, setLoading] = useState(true);
    const [imagesToShow, setImagesToShow] = useState([]);
    const isDesktop = useMediaQuery("(min-width: 960px)");

    useEffect(() => {
        const selectedIndex = selectedId ? selectedId - 1 : null;

        if (selectedIndex !== null && selectedIndex >= 0 && selectedIndex < imagesGroup.length) {
            const images = imagesGroup[selectedIndex];
            setImagesToShow(images);
            setLoading(true); // Set loading to true when fetching new images
            
            // Preload images
            Promise.all(
                images.map(image => {
                    return new Promise((resolve) => {
                        const img = new Image();
                        img.src = image.url;
                        img.onload = resolve; // Resolve when image is loaded
                    });
                })
            ).then(() => {
                setLoading(false); // Set loading to false when all images are preloaded
            });
        } else {
            setImagesToShow([]); // Reset images if selectedId is invalid
            setLoading(false); // Stop loading
        }
    }, [selectedId]);

    return (
        <div className={styles.workPage}>
            {isDesktop ? <DesktopNav /> : <MobileNav />}
            {isDesktop && <WorkTitle title={imagesToShow[0]?.title} />}
            {isOpen && <SideBar />}
            {loading ? (
                <div className="spinnerContainer">
					{isDesktop ? <div className="spinner2"></div> : <div className="spinner"></div>}
				</div> // Add a spinner or loading message
            ) : (
                <WorkPagePictures images={imagesToShow} />
            )}
        </div>
    );
}

export default WorkPage;
