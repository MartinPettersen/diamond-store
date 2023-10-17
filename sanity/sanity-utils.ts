import { createClient, groq } from "next-sanity";
import { Product } from "@/types/Product";


export async function getProducts(): Promise<Product[]> {
    const client = createClient({
        projectId: '9z44uvro',
        dataset: 'production',
        apiVersion: "2023-10-06",
    });

    return client.fetch(
        groq`*[_type == "product"]{
            _id,
            _createdAt,
            name,
            productName,
            "slug": slug.current,
            categori,
            material,
            gender,
            "image": image.asset -> url,
            "alt": image.alt,
            description,
            pris,
            sale,
            tilbudsprosent,
            inStock,
        }`
    );
}

export async function getProduct(slug: string): Promise<Product> {
    const client = createClient({
        projectId: '9z44uvro',
        dataset: 'production',
        apiVersion: "2023-10-06",
    });

    return client.fetch(
        groq`*[_type == "product" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            productName,
            "slug": slug.current,
            categori,
            material,
            gender,
            "image": image.asset -> url,
            "alt": image.alt,
            description,
            pris,
            sale,
            tilbudsprosent,
            inStock,
        }`,
        { slug }
    ); 
}


export async function getCategori(category: string): Promise<Product[]>{
    const client = createClient({
        projectId: '9z44uvro',
        dataset: 'production',
        apiVersion: "2023-10-06",
    });

    return client.fetch(
        groq`*[_type == "product" && categori == $category]{
            _id,
            _createdAt,
            name,
            productName,
            "slug": slug.current,
            categori,
            material,
            gender,
            "image": image.asset -> url,
            "alt": image.alt,
            url,
            description,
            pris,
            sale,
            tilbudsprosent,
            inStock,
        }`,
        {category}
    );
}

export async function getFilteredProducts(category: string, gender: string[], material: string[]): Promise<Product[]>{
    const client = createClient({
        projectId: '9z44uvro',
        dataset: 'production',
        apiVersion: "2023-10-06",
    });

    return client.fetch(
        groq`*[_type == "product" && categori == $category && gender in $gender && material in $material]{
            _id,
            _createdAt,
            name,
            productName,
            "slug": slug.current,
            categori,
            material,
            gender,
            "image": image.asset -> url,
            "alt": image.alt,
            url,
            description,
            pris,
            sale,
            tilbudsprosent,
            inStock,
        }`,
        {category, gender, material}
    );
}



export async function getSearchedProducts(searchTerm: string): Promise<Product[]>{
    const client = createClient({
        projectId: '9z44uvro',
        dataset: 'production',
        apiVersion: "2023-10-06",
    });

    const test = ["Female"]

    return client.fetch(
        groq`*[_type == "product" && (gender == $searchTerm || material == $searchTerm || categori == $searchTerm) ]{
            _id,
            _createdAt,
            name,
            productName,
            "slug": slug.current,
            categori,
            material,
            gender,
            "image": image.asset -> url,
            "alt": image.alt,
            url,
            description,
            pris,
            sale,
            tilbudsprosent,
            inStock,
        }`,
        {searchTerm}
    );
}


// fjernet url, for å oppdatere cachen. se det ann hvordan dette løses