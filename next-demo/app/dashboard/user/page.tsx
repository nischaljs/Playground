import Link from 'next/link'


const Users = () => {
    const users = [1,2,3,4,5,6]
  return (
    <div>
        {users.map((user) => (
            <Link key={user} href={`/dashboard/user/${user}`}>User : {user} <br /></Link>
        ))}
    </div>
  )
}

export default Users
