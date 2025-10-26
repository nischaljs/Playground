import Hello from "../components/hello";

const page = async () => {

    // this is all that needs to be done to fetch the data cause the data is server side fetched

    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    if (!response.ok) throw new Error("failed to fetch the data");
    const albums = await response.json();





    console.log("What type of component am I ");
    return (
        <>
            <div className="">page
            </div>
            <div>
                {albums.map((album: { id: number, title: string }) => (
                    <div
                        key={album.id}>
                        {album.title}

                    </div>
                ))}
            </div>
            <Hello />
        </>
    )
}

export default page
