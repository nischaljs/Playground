
const UserProfilePage = async ({ params }: { params: Promise<{ id: string }> }) => {

    const { id } = await params;
    return (
        <div>
            <h1>UserProfilePage</h1>
            <p>User ID:</p>
            <span>
                {id}
            </span>
        </div>
    )
}

export default UserProfilePage
