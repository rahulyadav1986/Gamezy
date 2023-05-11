const GameItem = ({item}) => {
    return (
        <>
            <img src={item.thumbnail} alt="" />
            <div className="content_area">
                <div className="date_pub d-flex justify-between">
                    <div className='opec_color'>{item.release_date}</div>
                    <div className='opec_color'>
                        {item.publisher} | <span>{item.platform}</span>
                    </div>
                </div>
                <h3>{item.title}</h3>
                <p>{`${item.short_description.substring(0, 80)}...`}</p>
            </div>
        </>
    )
}

export default GameItem