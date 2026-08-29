interface AgentAbility {
    slot: string;
    name: string;
    description: string;
    iconUrl: string;
}

export interface AgentModalData {
    id: string;
    name: string;
    devName: string;
    imageUrl: string;
    backgroundImageUrl: string;
    description: string;
    role: {
        id: string;
        name: string;
        description: string;
        iconUrl: string;
    };
    basicAbilities: AgentAbility[];
    signatureAbilities: AgentAbility[];
    ultimate: AgentAbility[];
}
