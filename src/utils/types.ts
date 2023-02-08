export type ProcessResponse = {
    anchors: {        
        domains?: string,
        relatedTerms?: string,
        teams?: string,
        users?: string,
    },
    description: string,
    iconUrl: string,
    id: string,
    name: string
}

export type ProcessRequest = {
    anchors: {
        domains?: string[],
        reltedTerms?: string[],
        teams?: string[],
        users?: string[]
    },
    description: string,
    iconUrl: string,
    id: string,
    name: string
}

export type ProcessMetadataPayload = {
    md: ProcessRequest
}

export type AllProcessResponse = {
    mds: ProcessResponse[]
}

export type CreateProcessResponse = {
    createdMd: ProcessResponse
}

export type UpdateProcessResponse = {
    updatedMd: ProcessResponse
}
