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




const MainGameSkeleton = () => {
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
        },
        {
            id: 7
        },
        {
            id: 8
        },
        {
            id: 9
        },
        {
            id: 10
        },
        {
            id: 11
        },
        {
            id: 12
        }
    ];
    return (
        <>
            {
                getSkelData.map((item, i) => {
                    return (
                        <li key={i} id={item.id} >
                            <SkeletonTheme baseColor="#752596" highlightColor="#fff">
                                <Skeleton count={1} className="skelbox2" />
                            </SkeletonTheme>
                            <div className="content_area">

                                <SkeletonTheme baseColor="#090b20" highlightColor="#fff">
                                    <Skeleton count={1} className="skelheading" />
                                    <Skeleton count={3} className="skelpara" />
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
            <div className="game_summery">
                <div className="left">
                    <SkeletonTheme baseColor="#1f1f44" highlightColor="#fff">
                        <Skeleton count={1} className="skelbox" />
                    </SkeletonTheme>
                    <div className="button_wrapper">
                        <SkeletonTheme baseColor="#1f1f44" highlightColor="#fff">
                            <Skeleton count={1} className="skelbutton" />
                            <Skeleton count={1} className="skelbutton" />
                        </SkeletonTheme>
                    </div>
                </div>
                <div className="right">
                        <SkeletonTheme baseColor="#1f1f44" highlightColor="#fff">
                            <Skeleton count={1} className="skelheading" />
                        </SkeletonTheme>
                    <ul className="tag_details">
                        <li>
                            <strong>
                                <SkeletonTheme baseColor="#1f1f44" highlightColor="#fff"><Skeleton count={1} className="skeltag" /></SkeletonTheme>
                            </strong>
                            <SkeletonTheme baseColor="#1f1f44" highlightColor="#fff"><Skeleton count={1} className="skelpara" /></SkeletonTheme>
                        </li>
                        <li>
                            <strong>
                                <SkeletonTheme baseColor="#1f1f44" highlightColor="#fff"><Skeleton count={1} className="skeltag" /></SkeletonTheme>
                            </strong>
                            <SkeletonTheme baseColor="#1f1f44" highlightColor="#fff"><Skeleton count={1} className="skelpara" /></SkeletonTheme>
                        </li>
                        <li>
                            <strong>
                                <SkeletonTheme baseColor="#1f1f44" highlightColor="#fff"><Skeleton count={1} className="skeltag" /></SkeletonTheme>
                            </strong>
                            <SkeletonTheme baseColor="#1f1f44" highlightColor="#fff"><Skeleton count={1} className="skelpara" /></SkeletonTheme>
                        </li>
                        <li>
                            <strong>
                                <SkeletonTheme baseColor="#1f1f44" highlightColor="#fff"><Skeleton count={1} className="skeltag" /></SkeletonTheme>
                            </strong>
                            <SkeletonTheme baseColor="#1f1f44" highlightColor="#fff"><Skeleton count={1} className="skelpara" /></SkeletonTheme>
                        </li>
                        <li>
                            <strong>
                                <SkeletonTheme baseColor="#1f1f44" highlightColor="#fff"><Skeleton count={1} className="skeltag" /></SkeletonTheme>
                            </strong>
                            <SkeletonTheme baseColor="#1f1f44" highlightColor="#fff"><Skeleton count={1} className="skelpara" /></SkeletonTheme>
                        </li>
                        <li>
                            <strong>
                                <SkeletonTheme baseColor="#1f1f44" highlightColor="#fff"><Skeleton count={1} className="skeltag" /></SkeletonTheme>
                            </strong>
                            <SkeletonTheme baseColor="#1f1f44" highlightColor="#fff"><Skeleton count={1} className="skelpara" /></SkeletonTheme>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="game_extra_details">
                <SkeletonTheme baseColor="#1f1f44" highlightColor="#fff">
                    <Skeleton count={10} className="skelpara" />
                </SkeletonTheme>
            </div>
        </>
    )
}




export { ImageSkeleton, NewGameSkeleton, SingleGameSkeleton, MainGameSkeleton };