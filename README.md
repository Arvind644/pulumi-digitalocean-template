# pulumi-digitalocean-template

This code will deploy a Droplet, Bucket and a Postgres Database in DigitalOcean. 

I am using my local filesystem for Pulumi remote state.


## Running the app

1. Create a new stack:

```
pulumi stack init dev
```

2. Creawte tokens and spaces keys in the digitalocean

```
pulumi config set digitalocean:token XXXXXXXXXXXXXX --secret
pulumi config set digitalocean:spaces_access_id XXXXXXXXXXXXXX
pulumi config set digitalocean:spaces_secret_key XXXXXXXXXXXXXX --secret
```

Note that --secret ensures your password is encrypted safely.


3. Restore NPM dependencies:

```
npm install
```

4. Run pulumi up to preview and deploy changes:

```
 pulumi up
```
