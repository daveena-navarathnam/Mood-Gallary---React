
function Gallery(props) {
    return (
        <div className="card" >
            <img src={props.url} alt="image" />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

var imagegallery = [
    {
        url: "https://picsum.photos/300?random=1",
        title: "Nature",
        description: "Beautiful view",
        catagory: "nature"
    },
    {
        url: "https://picsum.photos/300?random=2",
        title: "City",
        description: "Nature Lights",
        catagory: "night"
    },

    {
        url: "https://picsum.photos/300?random=3",
        title: "Beach",
        description: "Sunny Day",
        catagory: "nature"
    },
    {
        url: "https://picsum.photos/300?random=4",
        title: "Forest",
        description: "Deep green peaceful forest",
        catagory: "nature"
    },
    {
        url: "https://picsum.photos/300?random=5",
        title: "Mountains",
        description: "Snowy mountain peak",
        catagory: "nature"
    },
    {
        url: "https://picsum.photos/300?random=6",
        title: "City Life",
        description: "Busy streets and lights",
        catagory: "night"
    },
    {
        url: "https://picsum.photos/300?random=7",
        title: "Skyscrapers",
        description: "Tall buildings touching the sky",
        catagory: "city"
    },
    {
        url: "https://picsum.photos/300?random=8",
        title: "Beach",
        description: "Relaxing sunny beach",
        catagory: "nature"
    },
    {
        url: "https://picsum.photos/300?random=9",
        title: "Ocean",
        description: "Endless blue water",
        catagory: "nature"
    },
    {
        url: "https://picsum.photos/300?random=10",
        title: "Night Sky",
        description: "Stars shining brightly",
        catagory: "night"
    },

]

function App() {
    return (
        <div >

            <div className="header">
                <h1>Mood Gallery</h1>
                <p>Explore images by mood and vibe</p>
            </div>
            <div className="filter">
                <button className="button">All</button>
                <button className="button">Nature</button>
                <button className="button">city</button>
                <button className="button">Night</button>
            </div>
            <div className="gallery">
                {
                    imagegallery.map(function (item) {
                        return <Gallery url={item.url} title={item.title} description={item.description} ></Gallery>
                    })
                }
            </div>
            <div className="footer">
                <p>© 2026 Mood Gallery | Built with React</p>
            </div>

        </div>
    )
}

export default App;