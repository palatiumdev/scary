import getCreator from "@/Data/getCreators";
import { getClients } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Home() {
    const clientData = await getClients();
    const clientList = await fetchClientList(clientData[0]?.clients);

    return (
        <div className="grid place-items-center w-full gap-12 py-8">
            <h1 className="text-5xl text-primary">Clients</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
                {clientList?.map((client, i) => (
                    <Client key={i} client={client} />
                ))}
            </div>
        </div>
    )
}

const Client = ({ client }) => {
    return (
        <div className="flex flex-col">
            <div className="relative overflow-hidden aspect-square rounded-t-3xl">
                <Image
                    src={client.profileImage || '/placeholder-avatar.png'}
                    alt={client.username}
                    fill={true}
                    className="object-cover"
                />
            </div>
            <div className="bg-accent p-6 rounded-b-3xl">
                <h1 className="text-2xl lg:text-3xl mb-2">{client.username}</h1>
                {client.subCount && (
                    <p className="text-xl lg:text-2xl font-mono text-gray-300">
                        {Number(client.subCount).toLocaleString()} followers
                    </p>
                )}
            </div>
        </div>
    );
};

// Fetch client list function with improved sorting
async function fetchClientList(clients) {
    if (!clients?.length) return [];

    const clientList = await Promise.all(
        clients.map(async (client) => {
            let userData = {
                username: client.username || "",
                subCount: client.subCount || "0",
                profileImage: client.profileImage || "",
            };

            if (client.channelId) {
                try {
                    const channelData = await getCreator(client.channelId);
                    userData = {
                        username: channelData.username || client.username,
                        subCount: channelData.subCount || client.subCount,
                        profileImage: channelData.profileImage || client.profileImage,
                    };
                } catch (error) {
                    console.error(`Error fetching data for channel ${client.channelId}:`, error);
                }
            }

            return userData;
        })
    );

    // Sort by subscriber count (descending)
    return clientList.sort((a, b) => {
        const aCount = parseInt(String(a.subCount).replace(/[^0-9]/g, "")) || 0;
        const bCount = parseInt(String(b.subCount).replace(/[^0-9]/g, "")) || 0;
        return bCount - aCount;
    });
}