import { makeAutoObservable, } from "mobx";
import { Destiny } from "../models/destiny";
import agent from "../api/agent";

export default class DestinyStore{

    destinies: Destiny[] = [];
    selectedDestiny: Destiny | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = false;
    

    constructor(){
        makeAutoObservable(this)
    }

    loadDestinies = async() => {
        this.setLoadingInitial(true)
        try {
            const destinies = await agent.Destinies.list();
                destinies.forEach(destiny => {
                    this.destinies.push(destiny);
                })
                this.setLoadingInitial(false);
        } catch (error) {
            console.log(error)
                this.setLoadingInitial(false);
        }
    }

    selectDestiny = (id: string) => {
        this.selectedDestiny = this.destinies.find(a => a.id === id);
    }

    cancelSelectedDestiny = () =>{
        this.selectedDestiny = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectDestiny(id) : this.cancelSelectedDestiny();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

}