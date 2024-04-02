import { useState, useEffect } from "react";
import { createContext } from "react";
import { IAppContext, IAppProvider, IJob } from "./interfaces";
import axios from "axios";

const backendUrl = "http://localhost:3968";

// Objekt entleeren

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [jobs, setJobs] = useState<IJob[]>([]);

  useEffect(() => {
    (async () => {
      const response = (await axios.get<IJob[]>(`${backendUrl}/jobs`)).data;
      const _jobs: IJob[] = response.sort((a, b) => {
        const dateA = new Date(a.publicationDate);
        const dateB = new Date(b.publicationDate);
        return dateB.getTime() - dateA.getTime();
      });
      setJobs(_jobs);
    })();
  }, []);

  return (
    <AppContext.Provider
      value={{
        jobs,
      }}>
      {children}
    </AppContext.Provider>
  );
};
