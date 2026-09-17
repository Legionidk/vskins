import * as v from "valibot";

const chromaSchema = v.object({
    fullRender: v.string(),
});

export const skinApiSchema = v.object({
    chromas: v.array(chromaSchema),
});

export type skinApiType = v.InferOutput<typeof skinApiSchema>;
