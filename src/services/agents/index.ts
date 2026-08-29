import fetchAgents from "./api";
import mapAgents from "./mapper";

import CategoryData from "../../types/category";
import { AgentModalData } from "../../types/agentModal";

export default async function getAgents(): Promise<
    CategoryData<AgentModalData>[]
> {
    const fetchedAgents = await fetchAgents();
    return mapAgents(fetchedAgents);
}
