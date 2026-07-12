export default function getAgents() {
    return fetch("https://valorant-api.com/v1/agents")
        .then((res) => {
            if (!res.ok) {
                console.log(
                    `[AGENTS SERVICE]\nAPI status is not ok: ${request.status}\nReturned empty array`,
                );

                return [];
            }

            return res.json();
        })
        .then((data) => {
            const agents = new Map();

            for (const agent of data.data) {
                if (!agent.isPlayableCharacter) {
                    continue;
                }
                
                if (!agents.has(agent.role.uuid)) {
                    agents.set(agent.role.uuid, {
                        categoryName: agent.role.displayName,
                        categoryIcon: agent.role.displayIcon,
                        categoryId: agent.role.uuid,
                        cardsData: [],
                    });
                }

                agents.get(agent.role.uuid).cardsData.push({
                    cardTitle: agent.displayName,
                    cardImage: agent.displayIcon,
                    cardId: agent.uuid,
                    modalData: {
                        portrait: agent.fullPortrait,
                        backgroundImage: agent.background,
                        devName: agent.developerName,
                        description: agent.description,
                        role: agent.role,
                        basicAbilities: agent.abilities.filter(
                            (ability) =>
                                ability.slot === "Grenade" ||
                                ability.slot === "Ability1",
                        ),
                        signatureAbilities: agent.abilities.filter(
                            (ability) => ability.slot === "Ability2",
                        ),
                        ultimate: agent.abilities.filter(
                            (ability) => ability.slot === "Ultimate",
                        ),
                    },
                });
            }

            return [...agents.values()];
        });
}
