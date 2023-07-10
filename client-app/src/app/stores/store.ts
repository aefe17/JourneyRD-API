import { createContext, useContext } from "react";
import DestinyStore from "./destinyStore";

interface Store{
    destinyStore: DestinyStore
}

export const store: Store = {
    destinyStore: new DestinyStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}