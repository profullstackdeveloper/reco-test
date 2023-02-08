import axios, { AxiosResponse } from 'axios';
import { AllProcessResponse, CreateProcessResponse, ProcessMetadataPayload } from '../utils/types';

export const createNewProcess = async (payload: ProcessMetadataPayload): Promise<AxiosResponse<CreateProcessResponse> | undefined> => {

    try {

        const result = await axios.post('process-metadata', {
            data: payload,
        });
        return result;

    } catch (err: any) {
        console.log(err);
    }

}

export const getProcessMdById = async (processMetadataId: string): Promise<AxiosResponse<ProcessMetadataPayload> | undefined> => {

    try {
        const result = await axios.get(`process-metadata/${processMetadataId}`);
        return result;
    } catch (err: any) {
        console.log(err);
    }
}


export const getAllProcesses = async (limit?: number): Promise<AxiosResponse<AllProcessResponse> | undefined> => {

    try {
        const result = await axios.get('process-metadata', {
            params: {
                limit
            }
        });

        return result;
    } catch (err) {
        console.log(err);
    }
}