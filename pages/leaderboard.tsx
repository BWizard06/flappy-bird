import useTopUsers from "@/hooks/useTopUsers";

type User = {
    id: string;
    name: string;
    highScore: number;
  };

export default function Leaderboard() {
    const { data: users, isLoading } = useTopUsers();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div>
                <h2>Top Users</h2>
                <ul>
                    {users?.map((user: User, index: number) => (
                        <li key={user.id} className="text-white">
                            {index === 0 && <span>🥇 </span>}
                            {index === 1 && <span>🥈 </span>}
                            {index === 2 && <span>🥉 </span>}
                            {user.name} - High Score: {user.highScore}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
