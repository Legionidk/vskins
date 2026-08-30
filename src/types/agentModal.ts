interface AgentAbility {
    slot: string;
    name: string;
    description: string;
    iconUrl: string | null;
}

export interface AgentModalData {
    id: string;
    name: string;
    devName: string;
    imageUrl: string;
    portraitImageUrl: string;
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
    passiveAbility: AgentAbility[];
    ultimate: AgentAbility[];
}
