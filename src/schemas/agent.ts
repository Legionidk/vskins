import * as v from "valibot";

const AbilitySchema = v.object({
    slot: v.string(),
    displayName: v.string(),
    description: v.string(),
    displayIcon: v.nullable(v.string()),
});

export const AgentSchema = v.object({
    uuid: v.string(),
    displayName: v.string(),
    description: v.string(),
    developerName: v.string(),
    displayIcon: v.string(),
    bustPortrait: v.string(),
    background: v.string(),
    isPlayableCharacter: v.boolean(),
    role: v.object({
        uuid: v.string(),
        displayName: v.string(),
        description: v.string(),
        displayIcon: v.string(),
    }),
    abilities: v.array(AbilitySchema),
});

export type AgentApiType = v.InferOutput<typeof AgentSchema>;
