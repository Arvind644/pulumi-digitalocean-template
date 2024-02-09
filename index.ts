import * as pulumi from "@pulumi/pulumi";
import * as digitalocean from "@pulumi/digitalocean";

const droplet = new digitalocean.Droplet("web", {
    image: "ubuntu-20-04-x64",
    region: "nyc3",
    size: "s-1vcpu-1gb",
});

const space = new digitalocean.SpacesBucket("mybucket", {
    corsRules: [
        {
            allowedHeaders: ["*"],
            allowedMethods: ["GET"],
            allowedOrigins: ["*"],
            maxAgeSeconds: 3000,
        },
        {
            allowedHeaders: ["*"],
            allowedMethods: [
                "PUT",
                "POST",
                "DELETE",
            ],
            allowedOrigins: ["https://www.example.com"],
            maxAgeSeconds: 3000,
        },
    ],
    region: "nyc3",
});

const db = new digitalocean.DatabaseCluster("db", {
    engine: "pg",
    region: "nyc3",
    size: "db-s-1vcpu-1gb",
    nodeCount: 1,
    version: "15",
});

// Export the name and connection string for the database
export const dbName = db.name;
export const dbHost = db.host;
export const dbPort = db.port;

// Export the name and endpoint of the Spaces bucket
export const spacesName = space.name;
export const spacesEndpoint = space.endpoint;

// Export the name and IP of the Droplet
export const dropletName = droplet.name;
export const dropletIp = droplet.ipv4Address;
