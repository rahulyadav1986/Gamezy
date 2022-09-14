import './skeletons.scss';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const ImageSkeleton = () => {
    const getSkelData = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },
        {
            id: 5
        },
        {
            id: 6
        }
    ];



    return (
        <>
            {
                getSkelData.map((item, i) => {
                    return (
                        <li>
                            <SkeletonTheme id={item.id} key={i} baseColor="#1f1f44" highlightColor="#fff">
                                <Skeleton count={1} className="skelbox" />
                            </SkeletonTheme>
                        </li>

                    )
                })
            }

        </>
    )
}

const NewGameSkeleton = () => {
    const getSkelData = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },
        {
            id: 5
        },
        {
            id: 6
        }
    ];



    return (
        <>
            {
                getSkelData.map((item, i) => {
                    return (
                        <li key={i} className="d-flex justify-between align-center">
                            <div className="image_wrapper">
                                <SkeletonTheme id={item.id} key={i} baseColor="#1f1f44" highlightColor="#fff">
                                    <Skeleton count={1} className="skelbox" />
                                </SkeletonTheme>
                            </div>
                            <div className="content_wrapper">
                                <SkeletonTheme id={item.id} key={i} baseColor="#1f1f44" highlightColor="#fff">
                                    <Skeleton count={1} className="skeltag" />
                                    <Skeleton count={1} className="skelheading" />
                                    <Skeleton count={3} className="skelpara" />
                                    <Skeleton count={1} className="skelbutton" />
                                </SkeletonTheme>

                            </div>
                        </li>

                    )
                })
            }

        </>
    )
}


const SingleGameSkeleton = () => {
    return (
        <>
            <li className="d-flex justify-between align-center flex-column">
                <div className="image_wrapper">
                    <SkeletonTheme baseColor="#1f1f44" highlightColor="#fff">
                        <Skeleton count={1} className="skelbox" />
                    </SkeletonTheme>
                </div>
                <div className="content_wrapper">
                    <SkeletonTheme baseColor="#1f1f44" highlightColor="#fff">
                        <Skeleton count={1} className="skeltag" />
                        <Skeleton count={1} className="skelheading" />
                        <Skeleton count={3} className="skelpara" />
                        <Skeleton count={1} className="skelbutton" />
                    </SkeletonTheme>

                </div>
            </li>
        </>
    )
}

export { ImageSkeleton, NewGameSkeleton, SingleGameSkeleton };