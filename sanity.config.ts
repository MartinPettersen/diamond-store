import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: '9z44uvro',
    dataset: 'production',
    title: "Diamond Store Portfolio Site",
    apiVersion: "2023-10-06",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas}
});

export default config;