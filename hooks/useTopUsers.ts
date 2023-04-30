import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useTopUsers = () => {
    const { data, error, isLoading, mutate } = useSWR("/api/topUsers", fetcher);

    return {
        data,
        error,
        isLoading,
        mutate,
    };
};

export default useTopUsers;
