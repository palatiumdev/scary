import getCreator from "@/Data/getCreators";
import { getClients } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Home() {
    const clientData = await getClients();
    const clientList = await fetchClientList(clientData[0]?.clients);

    return (
        <div className="grid place-items-center w-full gap-8">
            <h1 className="text-5xl text-primary grid">Clients</h1>
            <div className="flex place-items-center place-content-center w-full gap-8 flex-wrap px-24">
                {clientList?.map((client, i) => (
                    <Client key={i} client={client} />
                ))}
            </div>
        </div>
    )
}

const Client = ({ client }) => {
    return (
        <div className="my-8">
            <div className="relative overflow-clip size-80 rounded-t-3xl">
                <Image
                    src={client.profileImage}
                    fill={true}
                    className="absolute object-cover"
                />
            </div>
            <div className="bg-accent w-80 h-32 rounded-b-3xl text-center grid place-content-center">
                <h1 className="text-3xl lg:text-4xl">{client.username}</h1>
                {client.subCount && (
                    <p className="text-2xl lg:text-3xl font-mono">
                        {client.subCount?.toLocaleString("de-DE")} followers
                    </p>
                )}
            </div>
        </div>
    );
};

// Fetch client list function placed below the component
async function fetchClientList(clients) {
    let clientList = [];

    await Promise.all(
        clients?.map(async (client) => {
            let user = {
                username: "",
                subCount: "",
                profileImage: "",
            };

            if (client.channelId) {
                const userData = await getCreator(client.channelId);
                user = {
                    username: userData.username,
                    subCount: userData.subCount,
                    profileImage: userData.profileImage,
                };
            }

            // Case for mix and matched clients without channelId
            if (client.username) user.username = client.username;
            if (client.subCount) user.subCount = client.subCount;
            if (client.profileImage) user.profileImage = client.profileImage;

            clientList.push(user);
        })
    );

    // Sort the client list by subscriber count (descending order)
    clientList.sort((a, b) => {
        const aSubCount = parseFloat((a.subCount || "0").toString().replace(/\./g, "") || 0);
        const bSubCount = parseFloat((b.subCount || "0").toString().replace(/\./g, "") || 0);
        return bSubCount - aSubCount;
    });

    return clientList;
}