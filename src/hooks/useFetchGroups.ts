import { useState, useCallback } from "react";
import {useDispatch} from "react-redux";

export function useFetchGroups() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchGroups = useCallback(async (url: string) => {
    setIsLoading(true);
    try {
      // Имитация задержки
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await fetch(url);
      const data = await response.json();

      // Проверка на наличие поля data и значение result
      if (!data || data.result === 0) {
        throw new Error("Failed to fetch groups. Please try again.");
      }
      setGroups(data);
      setError(null);
    } catch (error) {
      console.error("Failed to fetch groups:", error);
      setError("Failed to fetch groups. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);


  dispatch({type: "setGroups", payload: groups});
  return { fetchGroups, groups, error, isLoading };
}