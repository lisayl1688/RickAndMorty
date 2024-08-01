import React, { createContext } from "react";
import { Result } from "../Interfaces/IRickMorty";

interface Iloading {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoadingContext = createContext<Iloading | null>(null)



interface IData{
    rickMortyData: Result[] | null;
    setRickMortyData: React.Dispatch<React.SetStateAction<Result[] | null>>
}

export const DataContext = createContext<IData | null>(null)