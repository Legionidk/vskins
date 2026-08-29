import * as v from "valibot";
import { AgentSchema, AgentApiType } from "../../schemas/agent";

export default async function fetchAgents(): Promise<AgentApiType[]> {
    const response = await fetch("https://valorant-api.com/v1/agents");

    if (response.status !== 200) {
        throw new Error(
            `[AGENTS SERVICE] Error retrieving agents data.\n${response.status}: ${response.statusText}.`,
        );
    }

    const agents = await response.json();
    return v.parse(v.array(AgentSchema), agents.data);
}
