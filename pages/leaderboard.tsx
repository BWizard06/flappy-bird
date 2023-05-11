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
      <div className="relative h-screen w-full bg-emerald-500 bg-no-repeat bg-center bg-fixed bg-cover">
        <div className="bg-black bg-opacity-60 h-full w-full">
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-4xl font-bold text-white mb-12">Top Users</h2>
            <ul className="w-full">
              {users?.map((user: User, index: number) => (
                <li
                  key={user.id}
                  className={`flex items-center justify-between text-lg mb-4 p-4 rounded-lg shadow-md w-11/12 md:w-3/5 mx-auto ${
                    index === 0
                      ? "bg-yellow-300"
                      : index === 1
                      ? "bg-gray-300"
                      : index === 2
                      ? "bg-yellow-500"
                      : "bg-emerald-400"
                  } border-4 border-emerald-100`}
                >
                  <span
                    className={`inline-block w-6 text-center ${
                      index === 0
                        ? "text-yellow-800"
                        : index === 1
                        ? "text-gray-700"
                        : index === 2
                        ? "text-yellow-200"
                        : "text-white"
                    }`}
                  >
                    {index === 0 && "★"}
                    {index === 1 && "★"}
                    {index === 2 && "★"}
                  </span>
                  <span className="text-gray-800">{user.name}</span>
                  <span className="text-gray-700">High Score: {user.highScore}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
