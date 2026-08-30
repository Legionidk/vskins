import { AgentApiType, AgentSchema } from "../../schemas/agent";

import CategoryData from "../../types/category";
import { AgentModalData } from "../../types/agentModal";

export default function mapAgents(
    agentsData: AgentApiType[],
): CategoryData<AgentModalData>[] {
    const agents = new Map<string, CategoryData<AgentModalData>>();

    for (const agent of agentsData) {
        if (!agent.isPlayableCharacter) {
            continue;
        }

        let category = agents.get(agent.role.uuid);
        if (!category) {
            category = {
                id: agent.role.uuid,
                name: agent.role.displayName,
                iconUrl: agent.role.displayIcon,
                cardsData: [],
            };

            agents.set(agent.role.uuid, category);
        }

        const abilities = agent.abilities.map((ability) => {
            return {
                slot: ability.slot,
                name: ability.displayName,
                description: ability.description,
                iconUrl: ability.displayIcon,
            };
        });

        category.cardsData.push({
            id: agent.uuid,
            name: agent.displayName,
            imageUrl: agent.displayIcon,
            modalData: {
                id: agent.uuid,
                name: agent.displayName,
                devName: agent.developerName,
                imageUrl: agent.displayIcon,
                portraitImageUrl: agent.bustPortrait,
                backgroundImageUrl: agent.background,
                description: agent.description,
                role: {
                    id: agent.role.uuid,
                    name: agent.role.displayName,
                    description: agent.role.description,
                    iconUrl: agent.role.displayIcon,
                },
                basicAbilities: abilities.filter(
                    (ability) =>
                        ability.slot === "Grenade" ||
                        ability.slot === "Ability1",
                ),
                signatureAbilities: abilities.filter(
                    (ability) => ability.slot === "Ability2",
                ),
                passiveAbility: abilities.filter(
                    (ability) => ability.slot === "Passive",
                ),
                ultimate: abilities.filter(
                    (ability) => ability.slot === "Ultimate",
                ),
            },
        });
    }

    return [...agents.values()];
}
