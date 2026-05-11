import { useEffect, useState } from "react";

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const loadProjects = async () => {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch("/project.json", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch projects.");
        }

        const payload = await response.json();
        if (!Array.isArray(payload)) {
          throw new Error("Invalid projects payload.");
        }

        setProjects(payload);
      } catch (loadError) {
        if (loadError.name !== "AbortError") {
          setError("Failed to load projects.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
    return () => controller.abort();
  }, []);

  return { projects, isLoading, error };
};

export default useProjects;
