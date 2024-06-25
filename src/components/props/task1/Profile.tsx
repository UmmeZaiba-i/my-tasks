type ProfileProps = {
    name: string;
    age?: number;
    bio: string;
}
const Profile = ({ name, age, bio }: ProfileProps) => {
    return (
        <div>
            {/* { age && age >1 ?(
                <>
                <h4>{name}</h4>
                <h4>{bio}</h4>
                </> 
            ):(
            <h4>Age is less than or equal to 1</h4>
            )} */}
            <h4>{name}</h4>
            <h4>{age !== undefined ? `Age ${age}`: 'Age not provided'}</h4>
            <p>{bio}</p>

        </div>
    )
}

export default Profile
