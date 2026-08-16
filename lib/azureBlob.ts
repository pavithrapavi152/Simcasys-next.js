import { BlobServiceClient } from "@azure/storage-blob";


const accountName =
process.env.AZURE_STORAGE_ACCOUNT_NAME!;


const accountKey =
process.env.AZURE_STORAGE_ACCOUNT_KEY!;


const containerName =
process.env.AZURE_STORAGE_CONTAINER_NAME!;



const connectionString =
`DefaultEndpointsProtocol=https;
AccountName=${accountName};
AccountKey=${accountKey};
EndpointSuffix=core.windows.net`;



export const blobServiceClient =
BlobServiceClient.fromConnectionString(
    connectionString
);



export const containerClient =
blobServiceClient.getContainerClient(
    containerName
);