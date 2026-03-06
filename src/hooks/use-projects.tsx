import { useEffect, useState } from "react";
import { TProject } from "../types/project";

export function useProjects() {
  const [projects, setProjects] = useState<Array<TProject>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/projects");
        const repos = (await response.json()).repos as Array<TProject>;

        setProjects(repos || []);
      } catch (e) {
        setError(`${e}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return {
    projects,
    loading,
    error,
  };
}
